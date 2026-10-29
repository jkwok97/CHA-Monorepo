import { Team_Stats_V2 } from '@api/entities';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, MoreThan, Repository } from 'typeorm';

const TEAM_STATS_SELECT = {
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
  shots_for: true,
  shots_against: true,
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
} as const;

@Injectable()
export class ApiAllTimeTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private readonly repo: Repository<Team_Stats_V2>,
    @InjectDataSource() private readonly dataSource: DataSource
  ) {}

  async getAllTimeTeamStatsBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatTeamsHistoryDto[]> {
    const allTimeStats = await this.repo.find({
      relations: {
        team_id: true,
      },
      select: TEAM_STATS_SELECT,
      where: {
        season_type: seasonType,
        games_played: MoreThan(0),
      },
      order: {
        points: 'DESC',
      },
    });

    return this.convertStats(allTimeStats, false);
  }

  async getAllTimeTeamStatsSummedBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatTeamsHistoryDto[]> {
    const rawSummedStats: any[] = await this.dataSource.query(
      `SELECT
         a.team_id AS team_id,
         a.season_type AS season_type,
         c.city AS city,
         c.nickname AS nickname,
         c.shortname AS shortname,
         c.teamlogo AS teamlogo,
         c.isactive AS isactive,
         SUM(a.games_played) AS games_played,
         SUM(a.wins) AS wins,
         SUM(a.loss) AS loss,
         SUM(a.ties) AS ties,
         SUM(a.points) AS points,
         SUM(a.goals_for) AS goals_for,
         SUM(a.goals_against) AS goals_against,
         SUM(a.pp_attempts) AS pp_attempts,
         SUM(a.pp_goals) AS pp_goals,
         SUM(a.pk_attempts) AS pk_attempts,
         SUM(a.pk_goals) AS pk_goals,
         SUM(a.sh_goals) AS sh_goals,
         SUM(a.penalty_minutes) AS penalty_minutes,
         SUM(a.shots_for) AS shots_for,
         SUM(a.shots_against) AS shots_against,
         SUM(a.shut_outs) AS shut_outs,
         SUM(a.face_off_won) AS face_off_won,
         SUM(a.face_off_lost) AS face_off_lost,
         SUM(a.corner_won) AS corner_won,
         SUM(a.corner_lost) AS corner_lost,
         SUM(a.pass_complete) AS pass_complete,
         SUM(a.pass_incomplete) AS pass_incomplete
       FROM team_stats_v2 a
              INNER JOIN teams_v2 c ON c.id = a.team_id
       WHERE a.season_type = $1
       GROUP BY a.team_id, a.season_type, c.city, c.nickname, c.shortname, c.teamlogo, c.isactive
       ORDER BY points DESC`,
      [seasonType]
    );

    return this.convertStats(rawSummedStats, true);
  }

  private convertStats(array: any[], raw: boolean): StatTeamsHistoryDto[] {
    return array.map((stat: any) => {
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

      const teamName = raw
        ? `${stat.city ?? ''} ${stat.nickname ?? ''}`.trim()
        : `${stat.team_id?.city ?? ''} ${stat.team_id?.nickname ?? ''}`.trim();

      const teamInfo = !raw
        ? stat.team_id
        : {
            id: stat.team_id,
            city: stat.city,
            teamlogo: stat.teamlogo,
            shortname: stat.shortname,
            nickname: stat.nickname,
          };

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
        team_id: teamInfo,
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
        playing_year: stat.playing_year ?? null,
      } as StatTeamsHistoryDto;
    });
  }

  private calculateRatioPct(high: number, low: number): number {
    const total = (high || 0) + (low || 0);
    return total > 0 ? ((high || 0) / total) * 100 : 0;
  }
}
