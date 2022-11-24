import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ApiUserGoalieStatsService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  async getUserGoaliesStatsBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });

    const userTeamsWithGoalieStats = await this.setGoalieStats(
      userTeams,
      seasonType
    );

    const userTeamsWithGoaliesStatsConverted =
      await this.setConvertedGoaliesStats(userTeamsWithGoalieStats, false);

    return userTeamsWithGoaliesStatsConverted;
  }

  async getUserGoaliesStatsAllTimeBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });

    const userTeamsWithGoalieStats = await this.setGoalieAllTimeStats(
      userTeams,
      seasonType
    );

    const userTeamsWithGoaliesStatsConverted =
      await this.setConvertedGoaliesStats(userTeamsWithGoalieStats, true);

    return userTeamsWithGoaliesStatsConverted;
  }

  async getTeamPlayersByTeamName(teamName: string, season: string) {
    return await this.repo.find({
      select: {
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
      where: {
        team_name: teamName,
        playing_year: season,
        season_type: 'Regular',
      },
    });
  }

  private async setGoalieStats(
    array: Teams_V2[],
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        goalieStats: await this.getGoalieStats(item.shortname, seasonType),
      }))
    );
  }

  private async setGoalieAllTimeStats(
    array: Teams_V2[],
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        goalieStats: await this.getGoalieAllTimeStats(
          item.shortname,
          seasonType
        ),
      }))
    );
  }

  private async getGoalieAllTimeStats(
    teamShortName: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.dataSource.query(
      `select
      b.firstname as firstname,
      b.lastname as lastname,
      b.isgoalie as isgoalie,
      b.nhl_id as nhl_id,
      a.player_id as player_id,
      a.season_type as season_type, 
      a.team_name as team_name,
      sum(games_played) as games_played, 
      sum(wins) as wins, 
      sum(loss) as loss, 
      sum(ties) as ties, 
      sum(minutes_played) as minutes_played, 
      sum(en_goals) as en_goals, 
      sum(shutouts) as shutouts, 
      sum(goals_against) as goals_against, 
      sum(saves) as saves, 
      sum(shots_for) as shots_for, 
      sum(goals) as goals, 
      sum(assists) as assists, 
      sum(points) as points, 
      sum(penalty_minutes) as penalty_minutes
      from
      goalies_stats_v2 as a
      left join players_v2 as b
      on b.id = a.player_id
      where (a.player_id = b.id
      and
      a.games_played > '0'
      and
      a.season_type = '${seasonType}'
      and a.team_name = '${teamShortName}')
      group by b.firstname, b.lastname, b.isgoalie, b.nhl_id, a.player_id, a.season_type, a.team_name
      order by wins DESC`
    );
  }

  private async getGoalieStats(
    teamShortName: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.repo.find({
      select: {
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
      },
      relations: {
        player_id: true,
      },
      where: {
        team_name: teamShortName,
        season_type: seasonType,
      },
      order: {
        wins: 'DESC',
      },
    });
  }

  private async setConvertedGoaliesStats(array: any[], raw: boolean) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        goalieStats: await this.convertStats(item.goalieStats, raw, item),
      }))
    );
  }

  private async convertStats(
    array: Goalies_Stats_V2[],
    raw: boolean,
    teamInfo: any
  ) {
    return await Promise.all(
      array.map((stat: Goalies_Stats_V2) => ({
        playing_year: stat.playing_year,
        season_type: stat.season_type,
        teamInfo: !raw
          ? {
              id: teamInfo.id,
              city: teamInfo.city,
              nickname: teamInfo.nickname,
              teamlogo: teamInfo.teamlogo,
            }
          : null,
        player_id: !raw
          ? stat.player_id
          : {
              id: stat['player_id'],
              firstname: stat['firstname'],
              lastname: stat['lastname'],
              nhl_id: stat['nhl_id'],
              isactive: null,
              isgoalie: stat['isgoalie'],
              isdefense: null,
              isforward: null,
              is_protected: null,
            },
        games_played: Number(stat.games_played),
        minutes_played: Number(stat.minutes_played),
        goals_against_avg: !raw
          ? Number(Number(stat.goals_against_avg).toFixed(2))
          : Number(
              (
                (Number(stat.goals_against) * 60) /
                Number(stat.minutes_played)
              ).toFixed(2)
            ),
        wins: Number(stat.wins),
        loss: Number(stat.loss),
        ties: Number(stat.ties),
        shutouts: Number(stat.shutouts),
        goals_against: Number(stat.goals_against),
        saves: Number(stat.saves),
        shots_for: Number(stat.shots_for),
        save_pct: !raw
          ? Number(Number(stat.save_pct).toFixed(3))
          : Number((Number(stat.saves) / Number(stat.shots_for)).toFixed(3)),
        goals: Number(stat.goals),
        assists: Number(stat.assists),
        points: Number(stat.points),
        penalty_minutes: Number(stat.penalty_minutes),
      }))
    );
  }
}
