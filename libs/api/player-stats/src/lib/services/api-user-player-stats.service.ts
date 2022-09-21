import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ApiUserPlayerStatsService {
  constructor(
    @InjectRepository(Players_Stats_V2)
    private repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  async getUserPlayerStatsBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });

    const userTeamsWithPlayerStats = await this.setPlayerStats(
      userTeams,
      seasonType
    );

    const userTeamsWithPlayersStatsConverted =
      await this.setConvertedPlayersStats(userTeamsWithPlayerStats, false);

    return userTeamsWithPlayersStatsConverted;
  }

  async getUserPlayerStatsAllTimeBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });

    const userTeamsWithPlayerStats = await this.setPlayerAllTimeStats(
      userTeams,
      seasonType
    );

    const userTeamsWithPlayersStatsConverted =
      await this.setConvertedPlayersStats(userTeamsWithPlayerStats, true);

    return userTeamsWithPlayersStatsConverted;
  }

  private async setPlayerStats(
    array: Teams_V2[],
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        playerStats: await this.getPlayerStats(item.shortname, seasonType),
      }))
    );
  }

  private async setPlayerAllTimeStats(
    array: Teams_V2[],
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        playerStats: await this.getPlayerAllTimeStats(
          item.shortname,
          seasonType
        ),
      }))
    );
  }

  private async getPlayerAllTimeStats(
    teamShortName: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.dataSource.query(
      `select
      b.firstname as firstname,
      b.lastname as lastname,
      b.isdefense as isdefense,
      b.isforward as isforward,
      b.isgoalie as isgoalie,
      b.nhl_id as nhl_id,
      a.player_id as player_id,
      a.season_type as season_type, 
      a.position as position,
      sum(a.games_played) as games_played, 
      sum(a.goals) as goals, 
      sum(a.assists) as assists, 
      sum(a.points) as points, 
      sum(a.plus_minus) as plus_minus, 
      sum(a.penalty_minutes) as penalty_minutes, 
      sum(a.sh_goals) as sh_goals, 
      sum(a.pp_goals) as pp_goals, 
      sum(a.gw_goals) as gw_goals, 
      sum(a.gt_goals) as gt_goals, 
      sum(a.shots) as shots, 
      sum(a.minutes_played) as minutes_played, 
      sum(a.hits) as hits, 
      sum(a.blocked_shots) as blocked_shots
      from
      players_stats_v2 as a
      left join players_v2 as b
      on b.id = a.player_id
      where (a.player_id = b.id
      and
      a.points > '0'
      and
      a.season_type = '${seasonType}'
      and a.team_name = '${teamShortName}')
      group by b.firstname, b.lastname, b.isgoalie, b.isdefense, b.isforward, b.nhl_id, a.player_id, a.season_type, a.position
      order by points DESC`
    );
  }

  private async getPlayerStats(
    teamShortName: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.repo.find({
      select: {
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
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isdefense: true,
          isforward: true,
        },
      },
      relations: ['player_id'],
      where: {
        team_name: teamShortName,
        season_type: seasonType,
      },
      order: {
        points: 'DESC',
      },
    });
  }

  private async setConvertedPlayersStats(array: any[], raw: boolean) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        playerStats: await this.convertStats(item.playerStats, raw, item),
      }))
    );
  }

  private async convertStats(
    array: Players_Stats_V2[],
    raw: boolean,
    teamInfo: any
  ) {
    return await Promise.all(
      array.map((stat: Players_Stats_V2) => ({
        ...stat,
        teamInfo: !raw
          ? {
              id: teamInfo.id,
              city: teamInfo.city,
              nickname: teamInfo.nickname,
              teamlogo: teamInfo.teamlogo,
            }
          : null,
        games_played: Number(stat.games_played),
        goals: Number(stat.goals),
        assists: Number(stat.assists),
        points: Number(stat.points),
        plus_minus: Number(stat.plus_minus),
        penalty_minutes: Number(stat.penalty_minutes),
        pp_goals: Number(stat.pp_goals),
        sh_goals: Number(stat.sh_goals),
        gw_goals: Number(stat.gw_goals),
        gt_goals: Number(stat.gt_goals),
        shots: Number(stat.shots),
        shooting_pct: !raw
          ? Number(stat.shooting_pct)
          : Number(
              ((Number(stat.goals) / Number(stat.shots)) * 100).toFixed(1)
            ),
        minutes_per_game: !raw
          ? Number(stat.minutes_per_game)
          : Number(
              (Number(stat.minutes_played) / Number(stat.games_played)).toFixed(
                1
              )
            ),
        fo_pct: !raw ? Number(stat.fo_pct) : null,
        pass_pct: !raw ? Number(stat.pass_pct) : null,
        corner_pct: !raw ? Number(stat.corner_pct) : null,
        minutes_played: Number(stat.minutes_played),
        hits: Number(stat.hits),
        blocked_shots: Number(stat.blocked_shots),
        pointsPerSixty: Number(
          ((Number(stat.points) / Number(stat.minutes_played)) * 60).toFixed(2)
        ),
        hit_per_game: !raw
          ? Number(stat.hit_per_game)
          : Number((Number(stat.hits) / Number(stat.games_played)).toFixed(1)),
        player_id: !raw
          ? stat.player_id
          : {
              id: stat['player_id'],
              firstname: stat['firstname'],
              lastname: stat['lastname'],
              nhl_id: stat['nhl_id'],
              isactive: null,
              isgoalie: null,
              isdefense: stat['isdefense'],
              isforward: stat['isforward'],
              is_protected: null,
            },
      }))
    );
  }
}
