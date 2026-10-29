import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';

const COMMON_GOALIE_STATS_SELECT = {
  id: true,
  games_played: true,
  minutes_played: true,
  goals_against_avg: true,
  wins: true,
  loss: true,
  ties: true,
  en_goals: true,
  shutouts: true,
  goals_against: true,
  saves: true,
  shots_for: true,
  save_pct: true,
  goals: true,
  assists: true,
  points: true,
  penalty_minutes: true,
  pass_pct: true,
  team_name: true,
  playing_year: true,
  player_id: {
    id: true,
    firstname: true,
    lastname: true,
    nhl_id: true,
    isgoalie: true,
  },
} as const;

@Injectable()
export class ApiUserGoalieStatsService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private readonly repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>,
    @InjectDataSource() private readonly dataSource: DataSource
  ) {}

  async getUserGoaliesStatsBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
    if (userTeams.length === 0) return [];

    const teamShortNames = userTeams.map((t) => t.shortname).filter(Boolean);
    if (teamShortNames.length === 0) return [];

    const allStats = await this.repo.find({
      select: COMMON_GOALIE_STATS_SELECT,
      relations: {
        player_id: true,
      },
      where: {
        team_name: In(teamShortNames),
        season_type: seasonType,
      },
      order: {
        wins: 'DESC',
      },
    });

    const statsByTeam = new Map<string, Goalies_Stats_V2[]>();
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
        goalieStats: this.convertRegularStats(rawTeamStats, team),
      };
    });
  }

  async getUserGoaliesStatsAllTimeBySeasonType(
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
         b.isgoalie AS isgoalie,
         b.nhl_id AS nhl_id,
         a.player_id AS player_id,
         a.season_type AS season_type,
         a.team_name AS team_name,
         SUM(a.games_played) AS games_played,
         SUM(a.wins) AS wins,
         SUM(a.loss) AS loss,
         SUM(a.ties) AS ties,
         SUM(a.minutes_played) AS minutes_played,
         SUM(a.en_goals) AS en_goals,
         SUM(a.shutouts) AS shutouts,
         SUM(a.goals_against) AS goals_against,
         SUM(a.saves) AS saves,
         SUM(a.shots_for) AS shots_for,
         SUM(a.goals) AS goals,
         SUM(a.assists) AS assists,
         SUM(a.points) AS points,
         SUM(a.penalty_minutes) AS penalty_minutes
       FROM goalies_stats_v2 a
              INNER JOIN players_v2 b ON b.id = a.player_id
       WHERE a.games_played > 0
         AND a.season_type = $1
         AND a.team_name = ANY($2)
       GROUP BY b.firstname, b.lastname, b.isgoalie, b.nhl_id, a.player_id, a.season_type, a.team_name
       ORDER BY wins DESC`,
      [seasonType, teamShortNames]
    );

    // Group aggregated stats by team_name
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
        goalieStats: this.convertAllTimeStats(rawTeamStats),
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

  private convertRegularStats(stats: Goalies_Stats_V2[], team: Teams_V2) {
    const teamMetadata = {
      id: team.id,
      city: team.city,
      nickname: team.nickname,
      teamlogo: team.teamlogo,
    };

    return stats.map((stat) => ({
      playing_year: stat.playing_year,
      season_type: stat.season_type,
      team_name: stat.team_name,
      teamInfo: teamMetadata,
      player_id: stat.player_id,
      games_played: Number(stat.games_played),
      minutes_played: Number(stat.minutes_played),
      goals_against_avg: Number(Number(stat.goals_against_avg || 0).toFixed(2)),
      wins: Number(stat.wins),
      loss: Number(stat.loss),
      ties: Number(stat.ties),
      shutouts: Number(stat.shutouts),
      goals_against: Number(stat.goals_against),
      saves: Number(stat.saves),
      shots_for: Number(stat.shots_for),
      save_pct: Number(Number(stat.save_pct || 0).toFixed(3)),
      goals: Number(stat.goals),
      assists: Number(stat.assists),
      points: Number(stat.points),
      penalty_minutes: Number(stat.penalty_minutes),
    }));
  }

  private convertAllTimeStats(stats: any[]) {
    return stats.map((stat) => {
      const minutesPlayed = Number(stat.minutes_played) || 0;
      const goalsAgainst = Number(stat.goals_against) || 0;
      const shotsFor = Number(stat.shots_for) || 0;
      const saves = Number(stat.saves) || 0;

      const gaa = minutesPlayed > 0 ? (goalsAgainst * 60) / minutesPlayed : 0;
      const savePct = shotsFor > 0 ? saves / shotsFor : 0;

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
          isgoalie: stat.isgoalie,
          isdefense: null,
          isforward: null,
          is_protected: null,
        },
        games_played: Number(stat.games_played),
        minutes_played: minutesPlayed,
        goals_against_avg: Number(gaa.toFixed(2)),
        wins: Number(stat.wins),
        loss: Number(stat.loss),
        ties: Number(stat.ties),
        shutouts: Number(stat.shutouts),
        goals_against: goalsAgainst,
        saves,
        shots_for: shotsFor,
        save_pct: Number(savePct.toFixed(3)),
        goals: Number(stat.goals),
        assists: Number(stat.assists),
        points: Number(stat.points),
        penalty_minutes: Number(stat.penalty_minutes),
      };
    });
  }
}
