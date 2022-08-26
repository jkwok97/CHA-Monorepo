import { Players_Stats_V2, Team_Stats_V2 } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiPlayerStatsService {
  constructor(
    @InjectRepository(Players_Stats_V2)
    private repo: Repository<Players_Stats_V2>
  ) {}

  teamNameSelect = {
    id: true,
    teamlogo: true,
  };

  playerIdSelect = {
    id: true,
    firstname: true,
    lastname: true,
    nhl_id: true,
    isgoalie: true,
  };

  async getPlayerStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<any[]> {
    const hitsLeaders = await this.getHitsLeaders(season, seasonType);
    const pointsLeaders = await this.getPointsLeaders(season, seasonType);

    return [{ hits: hitsLeaders, points: pointsLeaders }];
    // return await this.repo.find({
    //   relations: ['team_name', 'player_id'],
    //   select: {
    //     team_name: {
    //       id: true,
    //       teamlogo: true,
    //     },
    //     player_id: {
    //       id: true,
    //       firstname: true,
    //       lastname: true,
    //       nhl_id: true,
    //       isgoalie: true,
    //     },
    //     assists: true,
    //     points: true,
    //     current_points_streak: true,
    //     plus_minus: true,
    //     blocked_shots: true,
    //     goals: true,
    //     hits: true,
    //     longest_points_streak: true,
    //     minutes_played: true,
    //     penalty_minutes: true,
    //     pp_goals: true,
    //     player_status: true,
    //     sh_goals: true,
    //     shots: true,
    //   },
    //   where: {
    //     playing_year: season,
    //     season_type: seasonType,
    //   },
    // });
  }

  private async getHitsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.repo.find({
      relations: ['team_id', 'player_id'],
      select: {
        hits: true,
        team_name: this.teamNameSelect,
        player_id: this.playerIdSelect,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        hits: 'DESC',
      },
      take: 10,
    });
  }

  private async getPointsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.repo.find({
      relations: ['team_id', 'player_id'],
      select: {
        points: true,
        team_name: this.teamNameSelect,
        player_id: this.playerIdSelect,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        hits: 'DESC',
      },
      take: 10,
    });
  }
}
