import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiGoalieStatsService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>
  ) {}

  async getAllGoalieStats(season: string, seasonType: 'Regular' | 'Playoffs') {
    const allGoalieStats = await this.repo.find({
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
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        wins: 'DESC',
      },
    });

    const goalieStatsWithTeamInfo = await this.setTeamInfo(allGoalieStats);

    const goalieStatsWithTeamInfoConverted = await this.convertStats(
      goalieStatsWithTeamInfo
    );

    return goalieStatsWithTeamInfoConverted;
  }

  async getGoalieStatsByPlayerId(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    playerId: number
  ) {
    const allGoalieStats = await this.repo.find({
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
        playing_year: season,
        season_type: seasonType,
        player_id: {
          id: playerId,
        },
      },
      order: {
        wins: 'DESC',
      },
    });

    const goalieStatsWithTeamInfo = await this.setTeamInfo(allGoalieStats);

    const goalieStatsWithTeamInfoConverted = await this.convertStats(
      goalieStatsWithTeamInfo
    );

    return goalieStatsWithTeamInfoConverted;
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

  private async convertStats(array: Goalies_Stats_V2[]) {
    return await Promise.all(
      array.map((stat: Goalies_Stats_V2) => ({
        ...stat,
        games_played: Number(stat.games_played),
        minutes_played: Number(stat.minutes_played),
        goals_against_avg: Number(Number(stat.goals_against_avg).toFixed(2)),
        wins: Number(stat.wins),
        loss: Number(stat.loss),
        ties: Number(stat.ties),
        en_goals: Number(stat.en_goals),
        shutouts: Number(stat.shutouts),
        goals_against: Number(stat.goals_against),
        saves: Number(stat.saves),
        shots_for: Number(stat.shots_for),
        save_pct: Number(Number(stat.save_pct).toFixed(3)),
        goals: Number(stat.goals),
        assists: Number(stat.assists),
        points: Number(stat.points),
        penalty_minutes: Number(stat.penalty_minutes),
        pass_pct: Number(stat.pass_pct),
      }))
    );
  }
}
