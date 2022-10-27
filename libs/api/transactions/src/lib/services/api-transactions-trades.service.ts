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
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { catchError, map, tap } from 'rxjs';

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

    const playerArray = [];

    await playersWithInfo.forEach(async (player) => {
      const string = await this.getPlayerString(player);
      playerArray.push(string);
    });

    const postJson = {
      text: `:rotating_light: WAIVER PICK UP ALERT :rotating_light: \n \n To ${team}: ${playerArray}`,
      channel: '#waivers-and-drops',
      username: 'League Office',
      icon_emoji: ':office',
    };

    return await this.sendToSlack(postJson, this.waiversHookURL);
  }

  // WAIVER RELEASE
  async waiverRelease(body: any) {
    const team = body.team;
    const players = body.players;
    const season = body.season;

    if (players && players.length > 0) {
      await players.forEach(async (player: string) => {
        if (player.includes('p-')) {
          await this.updateTeamForPlayer(player, 'FA', season);
        } else if (player.includes('g-')) {
          await this.updateTeamForGoalie(player, 'FA', season);
        }
      });
    }

    const playersWithInfo = await this.setPlayerInfo(players);

    const playerArray = [];

    await playersWithInfo.forEach(async (player) => {
      const string = await this.getPlayerString(player);
      playerArray.push(string);
    });

    const postJson = {
      text: `:rotating_light: WAIVER DROP ALERT :rotating_light: \n \n To Waivers From ${team}: ${playerArray}`,
      channel: '#waivers-and-drops',
      username: 'League Office',
      icon_emoji: ':office',
    };

    return await this.sendToSlack(postJson, this.waiversHookURL);
  }

  // TRADES
  async trade(body: TradeDto) {
    const teamOne = body.teamOne;
    const teamOnePlayers = await this.getPlayersFromArray(body.teamOnePicks);
    const teamOnePicks = await this.getDraftPicksFromArray(body.teamOnePicks);
    const teamTwo = body.teamTwo;
    const teamTwoPlayers = await this.getPlayersFromArray(body.teamTwoPicks);
    const teamTwoPicks = await this.getDraftPicksFromArray(body.teamTwoPicks);
    const season = body.season;

    if (teamOnePlayers && teamOnePlayers.length > 0) {
      await teamOnePlayers.forEach(async (player: string) => {
        if (player.includes('p-')) {
          await this.updateTeamForPlayer(player, teamTwo, season);
        } else if (player.includes('g-')) {
          await this.updateTeamForGoalie(player, teamTwo, season);
        }
      });
    }

    if (teamOnePicks && teamOnePicks.length > 0) {
      await teamOnePicks.forEach(
        async (pick: { team: string; value: string; year: string }) => {
          await this.updateTeamForPick(pick, teamTwo);
        }
      );
    }

    if (teamTwoPlayers && teamTwoPlayers.length > 0) {
      await teamTwoPlayers.forEach(async (player: string) => {
        if (player.includes('p-')) {
          await this.updateTeamForPlayer(player, teamOne, season);
        } else if (player.includes('g-')) {
          await this.updateTeamForGoalie(player, teamOne, season);
        }
      });
    }

    if (teamTwoPicks && teamTwoPicks.length > 0) {
      await teamTwoPicks.forEach(
        async (pick: { team: string; value: string; year: string }) => {
          await this.updateTeamForPick(pick, teamOne);
        }
      );
    }

    const teamOneplayersWithInfo = await this.setPlayerInfo(teamOnePlayers);
    const teamTwoplayersWithInfo = await this.setPlayerInfo(teamTwoPlayers);

    const teamOneplayerArray = [];
    const teamTwoplayerArray = [];

    await teamOneplayersWithInfo.forEach(async (player) => {
      const string = await this.getPlayerString(player);
      teamOneplayerArray.push(string);
    });

    await teamTwoplayersWithInfo.forEach(async (player) => {
      const string = await this.getPlayerString(player);
      teamTwoplayerArray.push(string);
    });

    const postJson = {
      text: `:rotating_light: TRADE ALERT :rotating_light: \n \n To ${teamOne}: ${teamTwoplayerArray} ${
        teamTwoPicks.length > 0 ? body.teamTwoPicks : ''
      } \n \n To ${teamTwo}: ${teamOneplayerArray} ${
        teamOnePicks.length > 0 ? body.teamOnePicks : ''
      }`,
      channel: '#trades',
      username: 'League Office',
      icon_emoji: ':office',
    };

    return await this.sendToSlack(postJson, this.tradeHookURL);
  }

  private async updateTeamForPick(
    pick: { team: string; value: string; year: string },
    team: string
  ) {
    const teamId = await this.getTeamInfo(team);

    let attrs: Partial<Draft_Order_V2>;

    if (pick.value.includes('1')) {
      attrs = {
        round_one: teamId.id,
      };
    } else if (pick.value.includes('2')) {
      attrs = {
        round_two: teamId.id,
      };
    } else if (pick.value.includes('3')) {
      attrs = {
        round_three: teamId.id,
      };
    } else if (pick.value.includes('4')) {
      attrs = {
        round_four: teamId.id,
      };
    } else if (pick.value.includes('5')) {
      attrs = {
        round_five: teamId.id,
      };
    }

    const draftRow = await this.draftRepo.findOneByOrFail({
      draft_year: pick.year,
      team_id: {
        shortname: pick.team,
      },
    });

    if (!draftRow) {
      throw new NotFoundException('player not found');
    }

    Object.assign(draftRow, attrs);

    return this.draftRepo.save(draftRow);
  }

  private async getDraftPicksFromArray(picksArray: string[]) {
    const picks = [];

    await picksArray.forEach((pick: string) => {
      if (!pick.includes('-')) {
        const newPick = pick.split(' ');

        const pickObject = {
          team: newPick[0],
          value: newPick[1],
          year: newPick[2],
        };

        picks.push(pickObject);
      }
    });

    return picks;
  }

  private async getPlayersFromArray(picksArray: string[]) {
    const players = [];

    await picksArray.forEach((pick: string) => {
      if (pick.includes('p-') || pick.includes('g-')) {
        players.push(pick);
      }
    });

    return players;
  }

  private getPlayerString(player: any) {
    return `${player.playerInfo.firstname} ${player.playerInfo.lastname}`;
  }

  private async setPlayerInfo(players) {
    return await Promise.all(
      players.map(async (item) => ({
        playerInfo: await this.getPlayerInfo(item.split('-')[1]),
      }))
    );
  }

  private async getTeamInfo(shortname: string) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
      },
      where: {
        shortname,
      },
    });
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

  private async sendToSlack(message, hook) {
    const options = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    this.httpService
      .post(`${hook}`, message, options)
      .pipe(map((response) => response.data))
      .subscribe({
        complete: () => console.log('completed'),
        error: (err) => console.log(err),
      });
  }
}
