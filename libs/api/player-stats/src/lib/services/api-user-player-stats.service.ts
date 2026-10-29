import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';

const COMMON_PLAYER_STATS_SELECT = {
  id: true,
  team_name: true,
  position: true,
  games_played: true,
  goals: true,
  assists: true,
  points: true,
  plus_minus: true,
  penalty_minutes: true,
  pp_goals: true,
  sh_goals: true,
  gw_goals: true,
  gt_goals: true,
  shots: true,
  shooting_pct: true,
  minutes_played: true,
  minutes_per_game: true,
  fo_pct: true,
  pass_pct: true,
  corner_pct: true,
  hits: true,
  blocked_shots: true,
  playing_year: true,
  season_type: true,
  player_id: {
    id: true,
    firstname: true,
    lastname: true,
    nhl_id: true,
    isdefense: true,
    isforward: true,
  },
} as const;

@Injectable()
export class ApiUserPlayerStatsService {
  constructor(
    @InjectRepository(Players_Stats_V2)
    private readonly repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>,
    @InjectDataSource() private readonly dataSource: DataSource
  ) {}

  async getUserPlayerStatsBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
    if (userTeams.length === 0) return [];

    const teamShortNames = userTeams.map((t) => t.shortname).filter(Boolean);
    if (teamShortNames.length === 0) return [];

    const allStats = await this.repo.find({
      select: COMMON_PLAYER_STATS_SELECT,
      relations: {
        player_id: true,
      },
      where: {
        team_name: In(teamShortNames),
        season_type: seasonType,
      },
      order: {
        points: 'DESC',
      },
    });

    const statsByTeam = new Map<string, Players_Stats_V2[]>();
    for (const stat of allStats) {
      const stats = statsByTeam.get(stat.team_name);
      if (stats) {
        stats.push(stat);
      } else {
        statsByTeam.set(stat.team_name, [stat]);
      }
    }

    return userTeams.map((team) => {
      const rawTeamStats = statsByTeam.get(team.shortname) ?? [];
      return {
        ...team,
        playerStats: this.convertRegularStats(rawTeamStats, team),
      };
    });
  }

  async getUserPlayerStatsAllTimeBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
    if (userTeams.length === 0) return [];

    const teamShortNames = userTeams.map((t) => t.shortname).filter(Boolean);
    if (teamShortNames.length === 0) return [];

    const rawStats: any[] = await this.dataSource.query(
      `SELECT
        b.firstname AS firstname,
        b.lastname AS lastname,
        b.isdefense AS isdefense,
        b.isforward AS isforward,
        b.isgoalie AS isgoalie,
        b.nhl_id AS nhl_id,
        a.player_id AS player_id,
        a.season_type AS season_type,
        a.team_name AS team_name,
        SUM(a.games_played) AS games_played,
        SUM(a.goals) AS goals,
        SUM(a.assists) AS assists,
        SUM(a.points) AS points,
        SUM(a.plus_minus) AS plus_minus,
        SUM(a.penalty_minutes) AS penalty_minutes,
        SUM(a.sh_goals) AS sh_goals,
        SUM(a.pp_goals) AS pp_goals,
        SUM(a.gw_goals) AS gw_goals,
        SUM(a.gt_goals) AS gt_goals,
        SUM(a.shots) AS shots,
        SUM(a.minutes_played) AS minutes_played,
        SUM(a.hits) AS hits,
        SUM(a.blocked_shots) AS blocked_shots
      FROM players_stats_v2 a
      INNER JOIN players_v2 b ON b.id = a.player_id
      WHERE a.points > 0
        AND a.season_type = $1
        AND a.team_name = ANY($2)
      GROUP BY b.firstname, b.lastname, b.isgoalie, b.isdefense, b.isforward, b.nhl_id, a.player_id, a.season_type, a.team_name
      ORDER BY points DESC`,
      [seasonType, teamShortNames]
    );

    const statsByTeam = new Map<string, any[]>();
    for (const stat of rawStats) {
      const stats = statsByTeam.get(stat.team_name);
      if (stats) {
        stats.push(stat);
      } else {
        statsByTeam.set(stat.team_name, [stat]);
      }
    }

    return userTeams.map((team) => {
      const rawTeamStats = statsByTeam.get(team.shortname) ?? [];
      return {
        ...team,
        playerStats: this.convertAllTimeStats(rawTeamStats),
      };
    });
  }

  async getTeamPlayersByTeamName(teamName: string, season: string) {
    return this.repo.find({
      select: {
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        team_name: teamName,
        playing_year: season,
        season_type: 'Regular',
      },
    });
  }

  private convertRegularStats(stats: Players_Stats_V2[], team: Teams_V2) {
    const teamMetadata = {
      id: team.id,
      city: team.city,
      nickname: team.nickname,
      teamlogo: team.teamlogo,
    };

    return stats.map((stat) => {
      const gamesPlayed = Number(stat.games_played) || 0;
      const minutesPlayed = Number(stat.minutes_played) || 0;
      const points = Number(stat.points) || 0;
      const hits = Number(stat.hits) || 0;

      return {
        playing_year: stat.playing_year,
        season_type: stat.season_type,
        team_name: stat.team_name,
        teamInfo: teamMetadata,
        player_id: stat.player_id,
        games_played: gamesPlayed,
        goals: Number(stat.goals),
        assists: Number(stat.assists),
        points,
        plus_minus: Number(stat.plus_minus),
        penalty_minutes: Number(stat.penalty_minutes),
        pp_goals: Number(stat.pp_goals),
        sh_goals: Number(stat.sh_goals),
        gw_goals: Number(stat.gw_goals),
        gt_goals: Number(stat.gt_goals),
        shots: Number(stat.shots),
        shooting_pct: Number(stat.shooting_pct),
        minutes_per_game: Number(stat.minutes_per_game),
        fo_pct: Number(stat.fo_pct),
        pass_pct: Number(stat.pass_pct),
        corner_pct: Number(stat.corner_pct),
        minutes_played: minutesPlayed,
        hits,
        blocked_shots: Number(stat.blocked_shots),
        pointsPerSixty:
          minutesPlayed > 0
            ? Number(((points / minutesPlayed) * 60).toFixed(2))
            : 0,
        hit_per_game:
          gamesPlayed > 0 ? Number((hits / gamesPlayed).toFixed(1)) : 0,
      };
    });
  }

  private convertAllTimeStats(stats: any[]) {
    return stats.map((stat) => {
      const gamesPlayed = Number(stat.games_played) || 0;
      const minutesPlayed = Number(stat.minutes_played) || 0;
      const shots = Number(stat.shots) || 0;
      const goals = Number(stat.goals) || 0;
      const points = Number(stat.points) || 0;
      const hits = Number(stat.hits) || 0;

      return {
        playing_year: null,
        season_type: stat.season_type,
        team_name: stat.team_name,
        teamInfo: null,
        player_id: {
          id: stat.player_id,
          firstname: stat.firstname,
          lastname: stat.lastname,
          nhl_id: stat.nhl_id,
          isactive: null,
          isgoalie: null,
          isdefense: stat.isdefense,
          isforward: stat.isforward,
          is_protected: null,
        },
        games_played: gamesPlayed,
        goals,
        assists: Number(stat.assists),
        points,
        plus_minus: Number(stat.plus_minus),
        penalty_minutes: Number(stat.penalty_minutes),
        pp_goals: Number(stat.pp_goals),
        sh_goals: Number(stat.sh_goals),
        gw_goals: Number(stat.gw_goals),
        gt_goals: Number(stat.gt_goals),
        shots,
        shooting_pct:
          shots > 0 ? Number(((goals / shots) * 100).toFixed(1)) : 0,
        minutes_per_game:
          gamesPlayed > 0
            ? Number((minutesPlayed / gamesPlayed).toFixed(1))
            : 0,
        fo_pct: null,
        pass_pct: null,
        corner_pct: null,
        minutes_played: minutesPlayed,
        hits,
        blocked_shots: Number(stat.blocked_shots),
        pointsPerSixty:
          minutesPlayed > 0
            ? Number(((points / minutesPlayed) * 60).toFixed(2))
            : 0,
        hit_per_game:
          gamesPlayed > 0 ? Number((hits / gamesPlayed).toFixed(1)) : 0,
      };
    });
  }
}
