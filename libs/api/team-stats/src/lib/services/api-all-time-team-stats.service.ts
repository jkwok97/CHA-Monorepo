import { Team_Stats_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';

@Injectable()
export class ApiAllTimeTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>
  ) {}

  async getAllTimeTeamStatsBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<Team_Stats_V2[]> {
    const allTimeStats = await this.repo.find({
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
        sh_goals: true,
        playing_year: true,
        season_type: true,
        shut_outs: true,
        face_off_won: true,
        face_off_lost: true,
        corner_won: true,
        corner_lost: true,
        pass_complete: true,
        pass_incomplete: true,
      },
      where: {
        season_type: seasonType,
        games_played: MoreThan(0),
      },
      order: {
        points: 'DESC',
      },
    });

    const allTimeStatsConverted = await this.convertStats(allTimeStats);

    return allTimeStatsConverted;
  }

  private async convertStats(array: Team_Stats_V2[]) {
    return await Promise.all(
      array.map((stat: Team_Stats_V2) => ({
        ...stat,
        games_played: Number(stat.games_played),
        wins: Number(stat.wins),
        loss: Number(stat.loss),
        ties: Number(stat.ties),
        points: Number(stat.points),
        goals_for: Number(stat.goals_for),
        goals_against: Number(stat.goals_against),
        pp_goals: Number(stat.pp_goals),
        pp_attempts: Number(stat.pp_attempts),
        pk_goals: Number(stat.pk_goals),
        pk_attempts: Number(stat.pk_attempts),
        sh_goals: Number(stat.sh_goals),
        penalty_minutes: Number(stat.penalty_minutes),
        face_off_won: Number(stat.face_off_won),
        face_off_lost: Number(stat.face_off_lost),
        corner_won: Number(stat.corner_won),
        corner_lost: Number(stat.corner_lost),
        pass_complete: Number(stat.pass_complete),
        pass_incomplete: Number(stat.pass_incomplete),
        shut_outs: Number(stat.shut_outs),
      }))
    );
  }
}
