import {
  Draft_Order_V2,
  Goalies_Stats_V2,
  Players_Stats_V2,
  Players_V2,
  Teams_V2,
  Transactions_V2,
} from '@api/entities';
import {
  GetTeamTransactionDto,
  TradeDto,
  WaiverAcquisitionDto,
} from '@cha/shared/entities';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

interface ParsedPick {
  team: string;
  value: string;
  year: string;
}

@Injectable()
export class ApiTransactionsTradesService {
  private readonly logger = new Logger(ApiTransactionsTradesService.name);
  private readonly waiversHookURL = process.env.SLACK_WAIVERS_WEBHOOK;
  private readonly tradeHookURL = process.env.SLACK_WEBHOOK;

  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Transactions_V2)
    private readonly repo: Repository<Transactions_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Players_Stats_V2)
    private readonly playerStatsRepo: Repository<Players_Stats_V2>,
    @InjectRepository(Goalies_Stats_V2)
    private readonly goalieStatsRepo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Draft_Order_V2)
    private readonly draftRepo: Repository<Draft_Order_V2>,
    @InjectRepository(Players_V2)
    private readonly playersRepo: Repository<Players_V2>
  ) {}

  async getTeamBySeason(
    team: string,
    season: string,
    draftYear: string
  ): Promise<GetTeamTransactionDto> {
    const draftTeam = await this.teamInfoRepo.findOne({
      select: { id: true, shortname: true },
      where: { shortname: team },
    });

    if (!draftTeam) {
      throw new NotFoundException(`Team '${team}' not found`);
    }

    const nextDraftYear = (Number(draftYear) + 1).toString();

    const [players, goalies, draftPicks] = await Promise.all([
      this.playerStatsRepo.find({
        select: {
          id: true,
          team_name: true,
          player_id: { id: true, firstname: true, lastname: true },
        },
        relations: { player_id: true },
        where: { team_name: team, playing_year: season },
        order: { player_id: { lastname: 'ASC' } },
      }),
      this.goalieStatsRepo.find({
        select: {
          id: true,
          team_name: true,
          player_id: { id: true, firstname: true, lastname: true },
        },
        relations: { player_id: true },
        where: { team_name: team, playing_year: season },
        order: { player_id: { lastname: 'ASC' } },
      }),
      this.draftRepo.find({
        relations: { team_id: true },
        where: [
          {
            draft_year: In([draftYear, nextDraftYear]),
            team_id: { id: draftTeam.id },
          },
          {
            draft_year: In([draftYear, nextDraftYear]),
            round_one: draftTeam.id,
          },
          {
            draft_year: In([draftYear, nextDraftYear]),
            round_two: draftTeam.id,
          },
          {
            draft_year: In([draftYear, nextDraftYear]),
            round_three: draftTeam.id,
          },
          {
            draft_year: In([draftYear, nextDraftYear]),
            round_four: draftTeam.id,
          },
          {
            draft_year: In([draftYear, nextDraftYear]),
            round_five: draftTeam.id,
          },
        ],
      }),
    ]);

    const attachTeam = (items: (Players_Stats_V2 | Goalies_Stats_V2)[]) =>
      items.map((item) => ({ ...item, teamInfo: draftTeam }));

    return {
      players: attachTeam(players) as any,
      goalies: attachTeam(goalies) as any,
      draftPicks,
    };
  }

  async waiverAcquire(body: WaiverAcquisitionDto) {
    const { team, players = [], season } = body;

    await this.batchUpdatePlayerRosters(players, team, season);

    const playerStrings = await this.resolvePlayerStrings(players);
    const postJson = {
      text: `:rotating_light: WAIVER PICK UP ALERT :rotating_light: \n \n To ${team}: \n ${playerStrings.join(
        '\n'
      )}`,
      channel: '#waivers-and-drops',
      username: 'League Office',
      icon_emoji: ':office',
    };

    return this.sendToSlack(postJson, this.waiversHookURL);
  }

  async waiverRelease(body: {
    team: string;
    players: string[];
    season: string;
  }) {
    const { team, players = [], season } = body;

    await this.batchUpdatePlayerRosters(players, 'FA', season);

    const playerStrings = await this.resolvePlayerStrings(players);
    const postJson = {
      text: `:rotating_light: WAIVER DROP ALERT :rotating_light: \n \n To Waivers From ${team}: \n ${playerStrings.join(
        '\n'
      )}`,
      channel: '#waivers-and-drops',
      username: 'League Office',
      icon_emoji: ':office',
    };

    return this.sendToSlack(postJson, this.waiversHookURL);
  }

  async trade(body: TradeDto) {
    const { teamOne, teamTwo, season } = body;
    const teamOnePicksArray = body.teamOnePicks || [];
    const teamTwoPicksArray = body.teamTwoPicks || [];

    const teamOnePlayers = teamOnePicksArray.filter(
      (p) => p.includes('p-') || p.includes('g-')
    );
    const teamTwoPlayers = teamTwoPicksArray.filter(
      (p) => p.includes('p-') || p.includes('g-')
    );

    const teamOneDraftPicks = this.parseDraftPicks(teamOnePicksArray);
    const teamTwoDraftPicks = this.parseDraftPicks(teamTwoPicksArray);

    const [teamOneEntity, teamTwoEntity] = await Promise.all([
      this.teamInfoRepo.findOne({
        select: { id: true, shortname: true },
        where: { shortname: teamOne },
      }),
      this.teamInfoRepo.findOne({
        select: { id: true, shortname: true },
        where: { shortname: teamTwo },
      }),
    ]);

    if (!teamOneEntity || !teamTwoEntity) {
      throw new NotFoundException(
        `One or both teams not found (${teamOne}, ${teamTwo})`
      );
    }

    await Promise.all([
      this.batchUpdatePlayerRosters(teamOnePlayers, teamTwo, season),
      this.batchUpdatePlayerRosters(teamTwoPlayers, teamOne, season),
      this.batchUpdatePicks(teamOneDraftPicks, teamTwoEntity.id),
      this.batchUpdatePicks(teamTwoDraftPicks, teamOneEntity.id),
      this.createTransactionRecord(
        teamOneEntity.id,
        teamTwoEntity.id,
        teamOnePlayers,
        teamTwoPlayers,
        teamOneDraftPicks,
        teamTwoDraftPicks
      ),
    ]);

    const [t1PlayerStrings, t2PlayerStrings] = await Promise.all([
      this.resolvePlayerStrings(teamOnePlayers),
      this.resolvePlayerStrings(teamTwoPlayers),
    ]);

    const t1PickStrings = teamOneDraftPicks.map(
      (p) => `- ${p.team} ${p.value} ${p.year}`
    );
    const t2PickStrings = teamTwoDraftPicks.map(
      (p) => `- ${p.team} ${p.value} ${p.year}`
    );

    const toTeamOne = [...t2PlayerStrings, ...t2PickStrings].join('\n');
    const toTeamTwo = [...t1PlayerStrings, ...t1PickStrings].join('\n');

    const postJson = {
      text: `:rotating_light: TRADE ALERT :rotating_light:\n\nTo ${teamOne}:\n${toTeamOne}\n\nTo ${teamTwo}:\n${toTeamTwo}\n`,
      channel: '#trades',
      username: 'League Office',
      icon_emoji: ':office',
    };

    return this.sendToSlack(postJson, this.tradeHookURL);
  }

  private async batchUpdatePlayerRosters(
    playerTokens: string[],
    targetTeam: string,
    season: string
  ) {
    const skaterIds: number[] = [];
    const goalieIds: number[] = [];

    for (const token of playerTokens) {
      const parts = token.split('-');
      const id = Number(parts[1]);
      if (isNaN(id)) continue;

      if (token.startsWith('p-')) skaterIds.push(id);
      else if (token.startsWith('g-')) goalieIds.push(id);
    }

    const updates: Promise<any>[] = [];

    if (skaterIds.length > 0) {
      updates.push(
        this.playerStatsRepo
          .createQueryBuilder()
          .update(Players_Stats_V2)
          .set({ team_name: targetTeam })
          .where('player_id IN (:...ids)', { ids: skaterIds })
          .andWhere('playing_year = :season', { season })
          .execute()
      );
    }

    if (goalieIds.length > 0) {
      updates.push(
        this.goalieStatsRepo
          .createQueryBuilder()
          .update(Goalies_Stats_V2)
          .set({ team_name: targetTeam })
          .where('player_id IN (:...ids)', { ids: goalieIds })
          .andWhere('playing_year = :season', { season })
          .execute()
      );
    }

    await Promise.all(updates);
  }

  private async batchUpdatePicks(picks: ParsedPick[], newOwnerTeamId: number) {
    await Promise.all(
      picks.map(async (pick) => {
        const roundField = this.mapRoundValueToField(pick.value);
        if (!roundField) return;

        const draftRow = await this.draftRepo.findOne({
          where: {
            draft_year: pick.year,
            team_id: { shortname: pick.team },
          },
        });

        if (draftRow) {
          (draftRow as any)[roundField] = newOwnerTeamId;
          await this.draftRepo.save(draftRow);
        }
      })
    );
  }

  private mapRoundValueToField(value: string): string | null {
    if (value.includes('1')) return 'round_one';
    if (value.includes('2')) return 'round_two';
    if (value.includes('3')) return 'round_three';
    if (value.includes('4')) return 'round_four';
    if (value.includes('5')) return 'round_five';
    return null;
  }

  private parseDraftPicks(items: string[]): ParsedPick[] {
    return items
      .filter(
        (item) =>
          !item.includes('p-') && !item.includes('g-') && item.includes(' ')
      )
      .map((item) => {
        const [team, value, year] = item.split(' ');
        return { team, value, year };
      });
  }

  private async resolvePlayerStrings(
    playerTokens: string[]
  ): Promise<string[]> {
    const rawIds = playerTokens
      .map((token) => Number(token.split('-')[1]))
      .filter((id) => !isNaN(id));

    if (rawIds.length === 0) return [];

    const players = await this.playersRepo.find({
      select: { id: true, firstname: true, lastname: true },
      where: { id: In(rawIds) },
    });

    const playerMap = new Map(
      players.map((p) => [p.id, `${p.firstname} ${p.lastname}`])
    );

    return rawIds.map((id) => `- ${playerMap.get(id) ?? 'Unknown Player'}`);
  }

  private async createTransactionRecord(
    teamOneId: number,
    teamTwoId: number,
    teamOnePlayers: string[],
    teamTwoPlayers: string[],
    teamOnePicks: ParsedPick[],
    teamTwoPicks: ParsedPick[]
  ) {
    const extractIds = (tokens: string[]) =>
      tokens.map((t) => t.split('-')[1]).filter(Boolean);

    const formatPicks = (picks: ParsedPick[]) =>
      picks.map((p) => `${p.team} ${p.value} ${p.year}`);

    const newTransaction = this.repo.create({
      transaction_date: new Date().toISOString().split('T')[0],
      team_one_id: teamOneId,
      team_two_id: teamTwoId,
      team_one_players: extractIds(teamTwoPlayers) as any,
      team_two_players: extractIds(teamOnePlayers) as any,
      team_one_picks: formatPicks(teamTwoPicks) as any,
      team_two_picks: formatPicks(teamOnePicks) as any,
    });

    return this.repo.save(newTransaction);
  }

  private async sendToSlack(message: object, hookUrl?: string) {
    if (!hookUrl) {
      this.logger.warn('Slack webhook URL is not configured');
      return;
    }

    try {
      await firstValueFrom(
        this.httpService.post(hookUrl, message, {
          headers: { 'Content-type': 'application/json' },
        })
      );
    } catch (err: any) {
      this.logger.error(
        `Failed sending Slack webhook: ${err.message}`,
        err.stack
      );
    }
  }
}
