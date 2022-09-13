import { Team_Stats_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiAllTimeTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>
  ) {}

  async getAllTimeTeamStatsBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<Team_Stats_V2[]> {
    return await this.repo.find({
      relations: ['team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          teamlogo: true,
          shortname: true,
          nickname: true,
        },
        games_played: true,
        points: true,
        wins: true,
        loss: true,
        ties: true,
        long_win_streak: true,
        penalty_minutes: true,
        goals_for: true,
        goals_against: true,
        pk_goals: true,
        pk_attempts: true,
        pp_goals: true,
        pp_attempts: true,
        trail_after_two_loss: true,
        trail_after_two_ties: true,
        trail_after_two_wins: true,
        home_loss: true,
        home_ties: true,
        home_wins: true,
        road_loss: true,
        road_ties: true,
        road_wins: true,
        div_loss: true,
        div_tie: true,
        div_win: true,
        shots_for: true,
        shots_against: true,
        sh_goals: true,
        playing_year: true,
        season_type: true,
        shut_outs: true,
      },
      where: {
        season_type: seasonType,
      },
      order: {
        points: 'DESC',
      },
    });
  }
}
