import { Teams_V2, Team_Stats_V2 } from '@api/entities';
import { StatUserTeamRecordDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiUserTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamsRepo: Repository<Teams_V2>
  ) {}

  async getUserTeamRecordBySeasonBySeasonType(
    teamId: number,
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserTeamRecordDto> {
    return await this.repo.findOne({
      relations: ['team_id'],
      select: {
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
      },
      where: {
        team_id: {
          id: teamId,
        },
        playing_year: season,
        season_type: seasonType,
      },
    });
  }

  async getUserTeamStatsBySeasonType(
    userId: number,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<any> {
    const userTeams = await this.teamsRepo.findBy({ users_id: userId });

    const userTeamsWithTeamStats = await this.setTeamStats(
      userTeams,
      seasonType
    );

    const userTeamsWithTeamStatsConverted = await this.setConvertedTeamStats(
      userTeamsWithTeamStats
    );

    return userTeamsWithTeamStatsConverted;
  }

  private async setConvertedTeamStats(array: any[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamStats: await this.convertStats(item.teamStats),
      }))
    );
  }

  private async setTeamStats(
    array: Teams_V2[],
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamStats: await this.getTeamStats(item.id, seasonType),
      }))
    );
  }

  private async getTeamStats(
    teamId: number,
    seasonType: 'Regular' | 'Playoffs'
  ) {
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
        shots_for: true
      },
      where: {
        team_id: {
          id: teamId,
        },
        season_type: seasonType,
      },
    });
  }

  private async convertStats(array: any[]) {
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
          this.getPct(
            Number(stat.face_off_won),
            Number(stat.face_off_lost)
          ).toFixed(1)
        ),
        passPct: Number(
          this.getPct(
            Number(stat.pass_complete),
            Number(stat.pass_incomplete)
          ).toFixed(1)
        ),
        cornerPct: Number(
          this.getPct(
            Number(stat.corner_won),
            Number(stat.corner_lost)
          ).toFixed(1)
        ),
        pimPerGame: Number(
          (stat.penalty_minutes / stat.games_played).toFixed(1)
        ),
        team_name: `${stat.team_id.city} ${stat.team_id.nickname}`,
        team_id: stat.team_id,
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
