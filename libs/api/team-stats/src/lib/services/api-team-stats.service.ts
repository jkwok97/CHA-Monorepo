import { Divisions_V2, Team_Stats_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

const BASIC_TEAM_STATS_SELECT = {
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
  shots_for: true,
  shots_against: true,
  face_off_won: true,
  face_off_lost: true,
  pass_complete: true,
  pass_incomplete: true,
} as const;

const DETAILED_TEAM_STATS_SELECT = {
  team_id: {
    id: true,
    city: true,
    teamlogo: true,
    shortname: true,
    nickname: true,
    divisions_id: {
      id: true,
      divisionname: true,
      conference_id: true,
    },
  },
  div_loss: true,
  div_tie: true,
  div_win: true,
  games_played: true,
  goals_against: true,
  goals_for: true,
  home_loss: true,
  home_ties: true,
  home_wins: true,
  loss: true,
  penalty_minutes: true,
  pk_attempts: true,
  pk_goals: true,
  pk_min: true,
  playing_year: true,
  points: true,
  pp_attempts: true,
  pp_goals: true,
  road_loss: true,
  road_ties: true,
  road_wins: true,
  season_type: true,
  ties: true,
  trail_after_two_loss: true,
  trail_after_two_ties: true,
  trail_after_two_wins: true,
  wins: true,
} as const;

const PLAYOFF_STANDINGS_SELECT = {
  team_id: {
    id: true,
    city: true,
    teamlogo: true,
    teamcolor: true,
    shortname: true,
    nickname: true,
    divisions_id: {
      id: true,
      divisionname: true,
      conference_id: true,
    },
  },
  goals_against: true,
  goals_for: true,
  playing_year: true,
  points: true,
  season_type: true,
  wins: true,
} as const;

@Injectable()
export class ApiTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private readonly repo: Repository<Team_Stats_V2>,
    @InjectRepository(Divisions_V2)
    private readonly divisionsRepo: Repository<Divisions_V2>
  ) {}

  async getTeamStatsBySeasonByType(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<Team_Stats_V2[]> {
    return this.repo.find({
      relations: {
        team_id: true,
      },
      select: BASIC_TEAM_STATS_SELECT,
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });
  }

  async getAllTeamStatsBySeasonByType(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<(Team_Stats_V2 & { division: Divisions_V2 | null })[]> {
    const teamStats = await this.repo.find({
      relations: {
        team_id: {
          divisions_id: true,
        },
      },
      select: DETAILED_TEAM_STATS_SELECT,
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });

    return this.attachDivisionInfo(teamStats);
  }

  async getTeamStandingsForPlayoffs(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<(Team_Stats_V2 & { division: Divisions_V2 | null })[]> {
    const teamStats = await this.repo.find({
      relations: {
        team_id: {
          divisions_id: true,
        },
      },
      select: PLAYOFF_STANDINGS_SELECT,
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });

    const teamStatsWithDivision = await this.attachDivisionInfo(teamStats);
    return this.sortTeamStatsByStandings(teamStatsWithDivision);
  }

  private async attachDivisionInfo<T extends Team_Stats_V2>(
    items: T[]
  ): Promise<(T & { division: Divisions_V2 | null })[]> {
    if (items.length === 0) return [];

    const uniqueDivisionIds = Array.from(
      new Set(
        items
          .map((item) => item.team_id?.divisions_id?.id)
          .filter((id): id is number => typeof id === 'number')
      )
    );

    const divisions = uniqueDivisionIds.length
      ? await this.divisionsRepo.find({
          relations: ['conference_id'],
          where: {
            id: In(uniqueDivisionIds),
          },
        })
      : [];

    const divisionMap = new Map(divisions.map((d) => [d.id, d]));

    return items.map((item) => {
      const divisionId = item.team_id?.divisions_id?.id;
      return {
        ...item,
        division: divisionId ? divisionMap.get(divisionId) ?? null : null,
      };
    });
  }

  private sortTeamStatsByStandings<T extends Team_Stats_V2>(data: T[]): T[] {
    return [...data].sort((a, b) => {
      const aPoints = Number(a.points) || 0;
      const bPoints = Number(b.points) || 0;
      if (bPoints !== aPoints) return bPoints - aPoints;

      const aWins = Number(a.wins) || 0;
      const bWins = Number(b.wins) || 0;
      if (bWins !== aWins) return bWins - aWins;

      const aGoalDiff =
        (Number(a.goals_for) || 0) - (Number(a.goals_against) || 0);
      const bGoalDiff =
        (Number(b.goals_for) || 0) - (Number(b.goals_against) || 0);
      if (bGoalDiff !== aGoalDiff) return bGoalDiff - aGoalDiff;

      const aGoalsFor = Number(a.goals_for) || 0;
      const bGoalsFor = Number(b.goals_for) || 0;
      return bGoalsFor - aGoalsFor;
    });
  }
}
