import { Teams_V2, Team_Stats_V2 } from '@api/entities';
import { StatUserTeamRecordDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiUserTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamsRepo: Repository<Teams_V2>
  ) {}

  async getUserTeamRecordBySeasonBySeasonType(
    teamId: number,
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserTeamRecordDto> {
    return await this.repo.findOne({
      relations: ['team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          teamlogo: true,
          shortname: true,
          nickname: true,
        },
        id: true,
        wins: true,
        loss: true,
        ties: true,
        points: true,
        home_wins: true,
        home_loss: true,
        home_ties: true,
        road_wins: true,
        road_loss: true,
        road_ties: true,
        div_win: true,
        div_loss: true,
        div_tie: true,
      },
      where: {
        team_id: {
          id: teamId,
        },
        playing_year: season,
        season_type: seasonType,
      },
    });
  }

  async getUserTeamStatsBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<any> {
    const userTeams = await this.teamsRepo.findBy({ users_id: userId });

    const userTeamsWithTeamStats = await this.setTeamStats(
      userTeams,
      seasonType
    );

    return userTeamsWithTeamStats;
  }

  private async setTeamStats(
    array: Teams_V2[],
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamStats: await this.getTeamStats(item.id, seasonType),
      }))
    );
  }

  private async getTeamStats(
    teamId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.repo.findOne({
      relations: ['team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          teamlogo: true,
          shortname: true,
          nickname: true,
        },
        id: true,
        wins: true,
        loss: true,
        ties: true,
        points: true,
        home_wins: true,
        home_loss: true,
        home_ties: true,
        road_wins: true,
        road_loss: true,
        road_ties: true,
        div_win: true,
        div_loss: true,
        div_tie: true,
      },
      where: {
        team_id: {
          id: teamId,
        },
        season_type: seasonType,
      },
    });
  }
}
