import { Team_Stats_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>
  ) {}

  async getTeamStatsBySeasonByType(
    season: string,
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
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });
  }

  async getAllTeamStatsBySeasonByType(
    season: string,
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
          divisions_id: {
            id: true,
            divisionname: true,
            conference_id: {
              id: true,
              conferencename: true,
            },
          },
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
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });
  }
}
