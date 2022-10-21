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

    const draftPicks = await this.draftRepo
      .createQueryBuilder('Draft_Order_V2')
      .where('Draft_Order_V2.draft_year = :draftYear', { draftYear: draftYear })
      // .orWhere('draft.draft_year = :draftYear', {
      //   draftYear: (Number(draftYear) + 1).toString(),
      // })
      .andWhere(
        new Brackets((qb) => {
          qb.where('Draft_Order_V2.team_id.shortname = :shortName', {
            shortName: draftTeam.shortname,
          })
            .orWhere('Draft_Order_V2.round_one = :teamId', {
              teamId: draftTeam.id,
            })
            .orWhere('Draft_Order_V2.round_two = :teamId', {
              teamId: draftTeam.id,
            })
            .orWhere('Draft_Order_V2.round_three = :teamId', {
              teamId: draftTeam.id,
            })
            .orWhere('Draft_Order_V2.round_four = :teamId', {
              teamId: draftTeam.id,
            })
            .orWhere('Draft_Order_V2.round_five = :teamId', {
              teamId: draftTeam.id,
            });
        })
      )
      .getMany();

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
