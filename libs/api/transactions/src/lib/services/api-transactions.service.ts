import {
  Draft_Order_V2,
  Goalies_Stats_V2,
  Players_Stats_V2,
  Players_V2,
  Teams_V2,
  Transactions_V2,
} from '@api/entities';
import { GetTeamTransactionDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Brackets, Repository } from 'typeorm';

@Injectable()
export class ApiTransactionsService {
  constructor(
    @InjectRepository(Transactions_V2)
    private repo: Repository<Transactions_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Players_V2)
    private playersRepo: Repository<Players_V2>,
    @InjectRepository(Players_Stats_V2)
    private playerStatsRepo: Repository<Players_Stats_V2>,
    @InjectRepository(Goalies_Stats_V2)
    private goalieStatsRepo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Draft_Order_V2)
    private draftRepo: Repository<Draft_Order_V2>
  ) {}

  async getTransactionsBySeason(year: string) {
    const season = this.findSeasonDates(year);

    const transactions = await this.repo.find({
      where: {
        transaction_date: Between(new Date(season.start), new Date(season.end)),
      },
      order: {
        transaction_date: 'DESC',
      },
    });

    const transactionsTeamInfo = await this.setTransactionInfo(transactions);

    return transactionsTeamInfo;
  }

  async getTeamBySeason(
    team: string,
    season: string,
    draftYear: string
  ): Promise<GetTeamTransactionDto> {
    const players = await this.playerStatsRepo.find({
      select: {
        id: true,
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
      .createQueryBuilder('draft')
      .where('draft.draft_year = :draftYear', { draftYear: draftYear })
      .orWhere('draft.draft_year = :draftYear', {
        draftYear: (Number(draftYear) + 1).toString(),
      })
      .andWhere(
        new Brackets((qb) => {
          qb.where('draft.team_id.shortname = :shortName', { shortName: team })
            .orWhere('draft.round_one = :teamId', { teamId: draftTeam.id })
            .orWhere('draft.round_two = :teamId', { teamId: draftTeam.id })
            .orWhere('draft.round_three = :teamId', { teamId: draftTeam.id })
            .orWhere('draft.round_four = :teamId', { teamId: draftTeam.id })
            .orWhere('draft.round_five = :teamId', { teamId: draftTeam.id });
        })
      )
      .getMany();

    const playersWithTeamInfo = await this.setTeamInfo(players);
    const goaliesWithTeamInfo = await this.setTeamInfo(goalies);
    const draftPicksWithTeamInfo = await this.setDraftTeamInfo(draftPicks);

    return {
      players: playersWithTeamInfo,
      goalies: goaliesWithTeamInfo,
      draftPicks: draftPicksWithTeamInfo,
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

  private async setTransactionInfo(transactions: Transactions_V2[]) {
    return await Promise.all(
      transactions.map(async (transaction: Transactions_V2) => ({
        id: transaction.id,
        transactionDate: transaction.transaction_date,
        teamOneInfo: await this.getTeamInfo(transaction.team_one_id),
        teamOnePlayers: await this.setPlayersInfo(transaction.team_one_players),
        teamOnePicks: transaction.team_one_picks,
        teamTwoInfo: await this.getTeamInfo(transaction.team_two_id),
        teamTwoPlayers: await this.setPlayersInfo(transaction.team_two_players),
        teamTwoPicks: transaction.team_two_picks,
      }))
    );
  }

  private async setPlayersInfo(array: number[]) {
    return await Promise.all(
      array.map(async (item) => ({
        player: await this.getPlayerInfo(item),
      }))
    );
  }

  private async getTeamInfo(teamId: number) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
        city: true,
        teamlogo: true,
        nickname: true,
        teamcolor: true,
        teamtextcolor: true,
      },
      where: {
        id: teamId,
      },
    });
  }

  private async getPlayerInfo(playerId: number) {
    return await this.playersRepo.findOne({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        nhl_id: true,
      },
      where: {
        id: playerId,
      },
    });
  }

  private findSeasonDates(year: string) {
    const seasons = [
      { year: '23', start: '2022-06-02', end: '2023-06-01' },
      { year: '22', start: '2021-07-15', end: '2022-06-01' },
      { year: '21', start: '2020-04-27', end: '2021-07-15' },
    ];

    return seasons.find((season) => season.year === year);
  }
}
