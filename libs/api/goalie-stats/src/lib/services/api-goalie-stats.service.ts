import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import {
  StatGoalieLeaderDto,
  StatGoalieLeadersDto,
} from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';

@Injectable()
export class ApiGoalieStatsService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>
  ) {}

  async getGoalieStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGames: string
  ): Promise<StatGoalieLeadersDto> {
    const shotsFacedLeaders = await this.getShotsFacedLeaders(
      season,
      seasonType,
      minGames
    );
    // const gaaLeaders = await this.getPointsLeaders(season, seasonType);
    // const savePctLeaders = await this.getAssistLeaders(season, seasonType);
    // const shutoutsLeaders = await this.getBestPlusMinusLeaders(
    //   season,
    //   seasonType
    // );
    // const winsLeaders = await this.getblockedShotLeaders(season, seasonType);

    return {
      shotsFaced: shotsFacedLeaders as unknown as StatGoalieLeaderDto[],
      gaa: [],
      savePct: [],
      shutouts: [],
      wins: [],
    };
  }

  private async getShotsFacedLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGames: string
  ) {
    const shotsFacedLeaders = await this.repo.find({
      select: {
        id: true,
        shots_for: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
        games_played: MoreThan(Number(minGames)),
      },
      order: {
        shots_for: 'DESC',
      },
      take: 10,
    });

    const shotsFacedLeadersWithTeamInfo = await this.setTeamInfo(
      shotsFacedLeaders
    );

    return shotsFacedLeadersWithTeamInfo;
  }

  private async setTeamInfo(array: Goalies_Stats_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getTeamInfo(item.team_name),
      }))
    );
  }

  private async getTeamInfo(teamName: string) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
        city: true,
        teamlogo: true,
        nickname: true,
      },
      where: {
        shortname: teamName,
      },
    });
  }
}
