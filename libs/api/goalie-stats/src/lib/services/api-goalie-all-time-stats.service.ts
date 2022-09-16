import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import { StatGoaliesHistoryDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, MoreThan, Repository } from 'typeorm';

@Injectable()
export class ApiGoalieAllTimeStatsService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  async getAllTimeGoalieStatsBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatGoaliesHistoryDto[]> {
    const allStats = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        playing_year: true,
        season_type: true,
        games_played: true,
        minutes_played: true,
        goals_against_avg: true,
        wins: true,
        loss: true,
        ties: true,
        shutouts: true,
        goals_against: true,
        saves: true,
        shots_for: true,
        save_pct: true,
        goals: true,
        assists: true,
        points: true,
        penalty_minutes: true,
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
        season_type: seasonType,
        games_played: MoreThan(0),
      },
      order: {
        wins: 'DESC',
      },
    });

    const allStatsWithTeamInfo = await this.setTeamInfo(allStats);

    const allStatsWithTeamInfoConverted = await this.convertStats(
      allStatsWithTeamInfo,
      false
    );

    return allStatsWithTeamInfoConverted;
  }

  async getAllTimeGoalieStatsSummedBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatGoaliesHistoryDto[]> {
    const result = await this.dataSource.query(
      `select
      b.firstname as firstname,
      b.lastname as lastname,
      b.isgoalie as isgoalie,
      a.player_id as player_id,
      a.season_type as season_type, 
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
      a.season_type = '${seasonType}')
      group by b.firstname, b.lastname, b.isgoalie, a.player_id, a.season_type
      order by wins DESC`
    );

    const allTimeStatsConverted = await this.convertStats(result, true);

    return allTimeStatsConverted;
  }

  private async setTeamInfo(array: Goalies_Stats_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getTeamInfo(item.team_name),
      }))
    );
  }

  private async getTeamInfo(teamName: string) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
        city: true,
        teamlogo: true,
        nickname: true,
      },
      where: {
        shortname: teamName,
      },
    });
  }

  private async convertStats(array: any[], raw: boolean) {
    return await Promise.all(
      array.map((stat: any) => ({
        playing_year: stat.playing_year,
        season_type: stat.season_type,
        teamInfo: !raw ? stat['teamInfo'] : null,
        player_id: !raw
          ? stat.player_id
          : {
              id: stat['player_id'],
              firstname: stat['firstname'],
              lastname: stat['lastname'],
              nhl_id: null,
              isactive: null,
              isgoalie: stat['isgoalie'],
              isdefense: null,
              isforward: null,
              is_protected: null,
            },
        games_played: Number(stat.games_played),
        minutes_played: Number(stat.minutes_played),
        goals_against_avg: !raw
          ? Number(stat.goals_against_avg)
          : Number(
              (Number(stat.goals_against) * 60) / Number(stat.minutes_played)
            ),
        wins: Number(stat.wins),
        loss: Number(stat.loss),
        ties: Number(stat.ties),
        shutouts: Number(stat.shutouts),
        goals_against: Number(stat.goals_against),
        saves: Number(stat.saves),
        shots_for: Number(stat.shots_for),
        save_pct: !raw
          ? Number(stat.save_pct)
          : Number(Number(stat.saves) / Number(stat.shots_for)),
        goals: Number(stat.goals),
        assists: Number(stat.assists),
        points: Number(stat.points),
        penalty_minutes: Number(stat.penalty_minutes),
      }))
    );
  }
}
