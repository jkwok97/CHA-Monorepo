import {
  Draft_Order_V2,
  Goalies_Stats_V2,
  Players_Stats_V2,
  Teams_V2,
  Transactions_V2,
} from '@api/entities';
import { GetTeamTransactionDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class ApiTransactionsTradesService {
  constructor(
    @InjectRepository(Transactions_V2)
    private repo: Repository<Transactions_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Players_Stats_V2)
    private playerStatsRepo: Repository<Players_Stats_V2>,
    @InjectRepository(Goalies_Stats_V2)
    private goalieStatsRepo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Draft_Order_V2)
    private draftRepo: Repository<Draft_Order_V2>
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
        { round_one: draftTeam.id },
        { round_two: draftTeam.id },
        { round_three: draftTeam.id },
        { round_four: draftTeam.id },
        { round_five: draftTeam.id },
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
        { round_one: draftTeam.id },
        { round_two: draftTeam.id },
        { round_three: draftTeam.id },
        { round_four: draftTeam.id },
        { round_five: draftTeam.id },
      ],
    });

    const draftPicks = currentDraftPicks.concat(nextDraftPicks);

    const playersWithTeamInfo = await this.setTeamInfo(players);
    const goaliesWithTeamInfo = await this.setTeamInfo(goalies);
    // const draftPicksWithTeamInfo = await this.setDraftTeamInfo(draftPicks);

    return {
      players: playersWithTeamInfo,
      goalies: goaliesWithTeamInfo,
      draftPicks: draftPicks,
    };
  }

  private async setDraftTeamInfo(array: Draft_Order_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getPlayerTeamInfo(item.team_id.shortname),
      }))
    );
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
}
