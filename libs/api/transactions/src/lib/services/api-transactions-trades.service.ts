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
  WaiverAcquisitionDto,
} from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class ApiTransactionsTradesService {
  waiversHookURL = process.env.SLACK_WAIVERS_WEBHOOK;
  tradeHookURL = process.env.SLACK_WEBHOOK;

  constructor(
    private httpService: HttpService,
    @InjectRepository(Transactions_V2)
    private repo: Repository<Transactions_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Players_Stats_V2)
    private playerStatsRepo: Repository<Players_Stats_V2>,
    @InjectRepository(Goalies_Stats_V2)
    private goalieStatsRepo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Draft_Order_V2)
    private draftRepo: Repository<Draft_Order_V2>,
    @InjectRepository(Players_V2)
    private playersRepo: Repository<Players_V2>
  ) {}

  async getTeamBySeason(
    team: string,
    season: string,
    draftYear: string
  ): Promise<GetTeamTransactionDto> {
    const players = await this.playerStatsRepo.find({
      select: {
        id: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
      where: {
        team_name: team,
        playing_year: season,
      },
      order: {
        player_id: {
          lastname: 'ASC',
        },
      },
    });

    const goalies = await this.goalieStatsRepo.find({
      select: {
        id: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
      where: {
        team_name: team,
        playing_year: season,
      },
      order: {
        player_id: {
          lastname: 'ASC',
        },
      },
    });

    const draftTeam = await this.getPlayerTeamInfo(team);

    const currentDraftPicks = await this.draftRepo.find({
      relations: ['team_id'],
      where: [
        {
          draft_year: draftYear,
          team_id: {
            id: draftTeam.id,
          },
        },
        { draft_year: draftYear, round_one: draftTeam.id },
        { draft_year: draftYear, round_two: draftTeam.id },
        { draft_year: draftYear, round_three: draftTeam.id },
        { draft_year: draftYear, round_four: draftTeam.id },
        { draft_year: draftYear, round_five: draftTeam.id },
      ],
    });

    const nextDraftPicks = await this.draftRepo.find({
      relations: ['team_id'],
      where: [
        {
          draft_year: (Number(draftYear) + 1).toString(),
          team_id: {
            id: draftTeam.id,
          },
        },
        {
          draft_year: (Number(draftYear) + 1).toString(),
          round_one: draftTeam.id,
        },
        {
          draft_year: (Number(draftYear) + 1).toString(),
          round_two: draftTeam.id,
        },
        {
          draft_year: (Number(draftYear) + 1).toString(),
          round_three: draftTeam.id,
        },
        {
          draft_year: (Number(draftYear) + 1).toString(),
          round_four: draftTeam.id,
        },
        {
          draft_year: (Number(draftYear) + 1).toString(),
          round_five: draftTeam.id,
        },
      ],
    });

    const draftPicks = currentDraftPicks.concat(nextDraftPicks);

    const playersWithTeamInfo = await this.setTeamInfo(players);
    const goaliesWithTeamInfo = await this.setTeamInfo(goalies);

    return {
      players: playersWithTeamInfo,
      goalies: goaliesWithTeamInfo,
      draftPicks: draftPicks,
    };
  }

  private async setTeamInfo(array: Players_Stats_V2[] | Goalies_Stats_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getPlayerTeamInfo(item.team_name),
      }))
    );
  }

  private async getPlayerTeamInfo(teamName: string) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
        shortname: true,
      },
      where: {
        shortname: teamName,
      },
    });
  }

  // WAIVER ACQUISITIONS
  async waiverAcquire(body: WaiverAcquisitionDto) {
    const team = body.team;
    const players = body.players;
    const season = body.season;

    if (players && players.length > 0) {
      await players.forEach(async (player: string) => {
        if (player.includes('p-')) {
          await this.updateTeamForPlayer(player, team, season);
        } else if (player.includes('g-')) {
          await this.updateTeamForGoalie(player, team, season);
        }
      });
    }

    const playersWithInfo = await this.setPlayerInfo(players);

    console.log(playersWithInfo);

    const postJson = {
      text: `:rotating_light: WAIVER PICK UP ALERT :rotating_light \n \n To ${team}: ${playersWithInfo.forEach(
        (player) => this.getPlayerString(player)
      )}`,
      channel: '#waivers-and-drops',
      username: 'League Office',
      icon_emoji: ':office',
    };

    console.log(postJson);

    this.httpService.post(`${this.waiversHookURL}`, postJson).pipe(
      map((response) => response.data),
      catchError((error) => error)
    );
  }

  private getPlayerString(player: any) {
    return `${player.playerInfo.firstname} ${player.playerInfo.lastname}, `;
  }

  private async setPlayerInfo(players) {
    return await Promise.all(
      players.map(async (item) => ({
        playerInfo: await this.getPlayerInfo(item.split('-')[1]),
      }))
    );
  }

  private async getPlayerInfo(playerId: number) {
    if (playerId) {
      return await this.playersRepo.findOne({
        select: {
          id: true,
          firstname: true,
          lastname: true,
        },
        where: {
          id: playerId,
        },
      });
    } else {
      return {};
    }
  }

  private async updateTeamForPlayer(
    playerId: string,
    team: string,
    season: string
  ) {
    const stringId = playerId.split('-');
    const attrs: Partial<Players_Stats_V2> = {
      team_name: team,
    };

    const player = await this.playerStatsRepo.findOneByOrFail({
      player_id: { id: Number(stringId[1]) },
      playing_year: season,
    });

    if (!player) {
      throw new NotFoundException('player not found');
    }

    Object.assign(player, attrs);

    return this.playerStatsRepo.save(player);
  }

  private async updateTeamForGoalie(
    playerId: string,
    team: string,
    season: string
  ) {
    const stringId = playerId.split('-');
    const attrs: Partial<Goalies_Stats_V2> = {
      team_name: team,
    };

    const player = await this.goalieStatsRepo.findOneByOrFail({
      player_id: { id: Number(stringId[1]) },
      playing_year: season,
    });

    if (!player) {
      throw new NotFoundException('player not found');
    }

    Object.assign(player, attrs);

    return this.goalieStatsRepo.save(player);
  }

  // WAIVER RELEASE

  async waiverRelease(body: any) {
    return null;
  }
  // TRADES
  async trade(body: any) {
    return null;
  }
}
