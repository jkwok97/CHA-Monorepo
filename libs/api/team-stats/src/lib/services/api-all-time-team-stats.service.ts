import { Team_Stats_V2 } from '@api/entities';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, DataSource } from 'typeorm';

@Injectable()
export class ApiAllTimeTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  async getAllTimeTeamStatsBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatTeamsHistoryDto[]> {
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

    const allTimeStatsConverted = await this.convertStats(allTimeStats, false);

    return allTimeStatsConverted;
  }

  async getAllTimeTeamStatsSummedBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatTeamsHistoryDto[]> {
    const result = await this.dataSource.query(
      ` select
      a.team_id as team_id,
      a.season_type as season_type, 
      c.city as city, 
      c.nickname as nickname,
      c.shortname,
      c.teamlogo,
      c.isactive,
      sum(games_played) as games_played, 
      sum(wins) as wins, 
      sum(loss) as loss, 
      sum(ties) as ties, 
      sum(points) as points, 
      sum(goals_for) as goals_for, 
      sum(goals_against) as goals_against, 
      sum(pp_attempts) as pp_attempts, 
      sum(pp_goals) as pp_goals, 
      sum(pk_attempts) as pk_attempts, 
      sum(pk_goals) as pk_goals, 
      sum(sh_goals) as sh_goals, 
      sum(penalty_minutes) as penalty_minutes, 
      sum(shots_for) as shots_for, 
      sum(shots_against) as shots_against, 
      sum(shut_outs) as shut_outs,
      sum(face_off_won) as face_off_won,
      sum(face_off_lost) as face_off_lost,
      sum(corner_won) as corner_won,
      sum(corner_lost) as corner_lost,
      sum(pass_complete) as pass_complete,
      sum(pass_incomplete) as pass_incomplete
      from
      team_stats_v2 as a
      left join teams_v2 as c
      on c.id = a.team_id
      where a.season_type = '${seasonType}'
      group by a.team_id, a.season_type, c.city, c.nickname, c.shortname, c.teamlogo, c.isactive
      order by points DESC`
    );

    const allTimeStatsConverted = await this.convertStats(result, true);

    return allTimeStatsConverted;
  }

  private async convertStats(array: any[], raw: boolean) {
    return await Promise.all(
      array.map((stat: any) => ({
        goalsForPerGame: Number(
          (stat.goals_for / stat.games_played).toFixed(2)
        ),
        goalsAgainstPerGame: Number(
          (stat.goals_against / stat.games_played).toFixed(2)
        ),
        goalDiff: stat.goals_for - stat.goals_against,
        winPct: Number(((stat.wins / stat.games_played) * 100).toFixed(1)),
        ppPct: Number(((stat.pp_goals / stat.pp_attempts) * 100).toFixed(1)),
        pkPct: Number(
          (
            ((stat.pk_attempts - stat.pk_goals) / stat.pk_attempts) *
            100
          ).toFixed(1)
        ),
        foPct: Number(
          this.getPct(stat.face_off_won, stat.face_off_lost).toFixed(1)
        ),
        passPct: Number(
          this.getPct(stat.pass_complete, stat.pass_incomplete).toFixed(1)
        ),
        cornerPct: Number(
          this.getPct(stat.corner_won, stat.corner_lost).toFixed(1)
        ),
        pimPerGame: Number(
          (stat.penalty_minutes / stat.games_played).toFixed(1)
        ),
        team_name: raw
          ? `${stat.city} ${stat.nickname}`
          : `${stat.team_id.city} ${stat.team_id.nickname}`,
        team_id: !raw
          ? stat.team_id
          : {
              id: stat.team_id,
              city: stat.city,
              teamlogo: stat.teamlogo,
              shortname: stat.shortname,
              nickname: stat.nickname,
            },
        games_played: Number(stat.games_played),
        wins: Number(stat.wins),
        loss: Number(stat.loss),
        ties: Number(stat.ties),
        points: Number(stat.points),
        goals_for: Number(stat.goals_for),
        goals_against: Number(stat.goals_against),
        shots_against: Number(stat.shots_against),
        shots_for: Number(stat.shots_for),
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
        season_type: stat.season_type,
        playing_year: stat.playing_year,
      }))
    );
  }

  private getPct(high: number, low: number): number {
    const total = high + low;
    return (high / total) * 100;
  }
}
