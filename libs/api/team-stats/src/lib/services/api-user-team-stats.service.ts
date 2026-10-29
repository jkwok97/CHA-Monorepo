import { Teams_V2, Team_Stats_V2 } from '@api/entities';
import { StatUserTeamRecordDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, MoreThan, Repository } from 'typeorm';

export type UserTeamWithStats = Teams_V2 & {
  teamStats: ReturnType<ApiUserTeamStatsService['convertStats']>;
};

// Or use a clean DTO interface:
export interface UserTeamWithStatsDto {
  id: number;
  city: string;
  nickname: string;
  shortname: string;
  teamlogo: string;
  teamStats: any[];
  [key: string]: any;
}

const TEAM_RECORD_SELECT = {
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
} as const;

const TEAM_STATS_DETAILED_SELECT = {
  team_id: {
    id: true,
    city: true,
    teamlogo: true,
    shortname: true,
    nickname: true,
  },
  id: true,
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
  shots_against: true,
  shots_for: true,
} as const;

@Injectable()
export class ApiUserTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private readonly repo: Repository<Team_Stats_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamsRepo: Repository<Teams_V2>
  ) {}

  async getUserTeamRecordBySeasonBySeasonType(
    teamId: number,
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserTeamRecordDto | null> {
    return (await this.repo.findOne({
      relations: {
        team_id: true,
      },
      select: TEAM_RECORD_SELECT,
      where: {
        team_id: {
          id: teamId,
        },
        playing_year: season,
        season_type: seasonType,
      },
    })) as unknown as StatUserTeamRecordDto | null;
  }

  async getUserTeamStatsBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<UserTeamWithStats[]> {
    const userTeams = await this.teamsRepo.findBy({ users_id: userId });
    if (userTeams.length === 0) return [];

    const teamIds = userTeams.map((t) => t.id).filter(Boolean);
    if (teamIds.length === 0) return [];

    const allStats = await this.repo.find({
      relations: {
        team_id: true,
      },
      select: TEAM_STATS_DETAILED_SELECT,
      where: {
        team_id: {
          id: In(teamIds),
        },
        games_played: MoreThan(0),
        season_type: seasonType,
      },
      order: {
        playing_year: 'DESC',
      },
    });

    const statsByTeamId = new Map<number, Team_Stats_V2[]>();
    for (const stat of allStats) {
      const tid = stat.team_id?.id;
      if (!tid) continue;

      const existing = statsByTeamId.get(tid);
      if (existing) {
        existing.push(stat);
      } else {
        statsByTeamId.set(tid, [stat]);
      }
    }

    // Type assertion at the return boundary resolves class-to-object mismatch
    return userTeams.map((team) => ({
      ...team,
      teamStats: this.convertStats(statsByTeamId.get(team.id) ?? []),
    })) as UserTeamWithStats[];
  }

  private convertStats(stats: Team_Stats_V2[]) {
    return stats.map((stat: any) => {
      const gp = Number(stat.games_played) || 0;
      const gf = Number(stat.goals_for) || 0;
      const ga = Number(stat.goals_against) || 0;
      const wins = Number(stat.wins) || 0;
      const pim = Number(stat.penalty_minutes) || 0;
      const ppAttempts = Number(stat.pp_attempts) || 0;
      const ppGoals = Number(stat.pp_goals) || 0;
      const pkAttempts = Number(stat.pk_attempts) || 0;
      const pkGoals = Number(stat.pk_goals) || 0;

      const goalsForPerGame = gp > 0 ? Number((gf / gp).toFixed(2)) : 0;
      const goalsAgainstPerGame = gp > 0 ? Number((ga / gp).toFixed(2)) : 0;
      const winPct = gp > 0 ? Number(((wins / gp) * 100).toFixed(1)) : 0;
      const pimPerGame = gp > 0 ? Number((pim / gp).toFixed(1)) : 0;
      const ppPct =
        ppAttempts > 0 ? Number(((ppGoals / ppAttempts) * 100).toFixed(1)) : 0;
      const pkPct =
        pkAttempts > 0
          ? Number((((pkAttempts - pkGoals) / pkAttempts) * 100).toFixed(1))
          : 0;

      const foPct = Number(
        this.calculateRatioPct(
          Number(stat.face_off_won),
          Number(stat.face_off_lost)
        ).toFixed(1)
      );
      const passPct = Number(
        this.calculateRatioPct(
          Number(stat.pass_complete),
          Number(stat.pass_incomplete)
        ).toFixed(1)
      );
      const cornerPct = Number(
        this.calculateRatioPct(
          Number(stat.corner_won),
          Number(stat.corner_lost)
        ).toFixed(1)
      );

      const teamCity = stat.team_id?.city ?? '';
      const teamNickname = stat.team_id?.nickname ?? '';
      const teamName = `${teamCity} ${teamNickname}`.trim();

      return {
        goalsForPerGame,
        goalsAgainstPerGame,
        goalDiff: gf - ga,
        winPct,
        ppPct,
        pkPct,
        foPct,
        passPct,
        cornerPct,
        pimPerGame,
        team_name: teamName,
        team_id: stat.team_id,
        games_played: gp,
        wins,
        loss: Number(stat.loss) || 0,
        ties: Number(stat.ties) || 0,
        points: Number(stat.points) || 0,
        goals_for: gf,
        goals_against: ga,
        shots_against: Number(stat.shots_against) || 0,
        shots_for: Number(stat.shots_for) || 0,
        pp_goals: ppGoals,
        pp_attempts: ppAttempts,
        pk_goals: pkGoals,
        pk_attempts: pkAttempts,
        sh_goals: Number(stat.sh_goals) || 0,
        penalty_minutes: pim,
        face_off_won: Number(stat.face_off_won) || 0,
        face_off_lost: Number(stat.face_off_lost) || 0,
        corner_won: Number(stat.corner_won) || 0,
        corner_lost: Number(stat.corner_lost) || 0,
        pass_complete: Number(stat.pass_complete) || 0,
        pass_incomplete: Number(stat.pass_incomplete) || 0,
        shut_outs: Number(stat.shut_outs) || 0,
        season_type: stat.season_type,
        playing_year: stat.playing_year,
      };
    });
  }

  private calculateRatioPct(high: number, low: number): number {
    const total = (high || 0) + (low || 0);
    return total > 0 ? ((high || 0) / total) * 100 : 0;
  }
}
