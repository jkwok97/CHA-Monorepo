import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, In, Repository } from 'typeorm';

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
  player_id: {
    id: true,
    firstname: true,
    lastname: true,
    nhl_id: true,
    isgoalie: true,
  },
} as const;

@Injectable()
export class ApiGoalieStatsService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private readonly repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>
  ) {}

  async getAll(season: string): Promise<StatGoalieAllDto[]> {
    const players = await this.repo.find({
      where: {
        playing_year: season,
      },
    });

    const playersWithTeamInfo = await this.attachTeamInfo(players);
    return playersWithTeamInfo as unknown as StatGoalieAllDto[];
  }

  async updateGoalieById(
    id: number,
    season: string,
    attrs: Partial<Goalies_Stats_V2>
  ): Promise<Goalies_Stats_V2> {
    const player = await this.repo.findOneBy({
      player_id: {
        id,
      },
      playing_year: season,
    });

    if (!player) {
      throw new NotFoundException('goalie not found');
    }

    Object.assign(player, attrs);
    return this.repo.save(player);
  }

  async deleteGoalie(id: number, season: string): Promise<Goalies_Stats_V2> {
    const player = await this.repo.findOneBy({
      id,
      playing_year: season,
    });

    if (!player) {
      throw new NotFoundException('goalie not found');
    }

    return this.repo.remove(player);
  }

  async getAllGoalieStats(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatGoalieAllDto[]> {
    return this.fetchAndFormatGoalieStats({
      playing_year: season,
      season_type: seasonType,
    });
  }

  async getGoalieStatsByPlayerId(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    playerId: number
  ): Promise<StatGoalieAllDto[]> {
    return this.fetchAndFormatGoalieStats({
      playing_year: season,
      season_type: seasonType,
      player_id: {
        id: playerId,
      },
    });
  }

  private async fetchAndFormatGoalieStats(
    whereClause: FindOptionsWhere<Goalies_Stats_V2>
  ): Promise<StatGoalieAllDto[]> {
    const records = await this.repo.find({
      select: COMMON_GOALIE_STATS_SELECT,
      relations: {
        player_id: true,
      },
      where: whereClause,
      order: {
        wins: 'DESC',
      },
    });

    if (records.length === 0) {
      return [];
    }

    const recordsWithTeams = await this.attachTeamInfo(records);

    return recordsWithTeams.map((stat) => ({
      ...stat,
      games_played: Number(stat.games_played),
      minutes_played: Number(stat.minutes_played),
      goals_against_avg: Number(Number(stat.goals_against_avg || 0).toFixed(2)),
      wins: Number(stat.wins),
      loss: Number(stat.loss),
      ties: Number(stat.ties),
      en_goals: Number(stat.en_goals),
      shutouts: Number(stat.shutouts),
      goals_against: Number(stat.goals_against),
      saves: Number(stat.saves),
      shots_for: Number(stat.shots_for),
      save_pct: Number(Number(stat.save_pct || 0).toFixed(3)),
      goals: Number(stat.goals),
      assists: Number(stat.assists),
      points: Number(stat.points),
      penalty_minutes: Number(stat.penalty_minutes),
      pass_pct: Number(stat.pass_pct || 0),
    })) as unknown as StatGoalieAllDto[];
  }

  private async attachTeamInfo<T extends { team_name: string }>(
    items: T[]
  ): Promise<(T & { teamInfo: Teams_V2 | null })[]> {
    const uniqueTeamNames = Array.from(
      new Set(items.map((item) => item.team_name).filter(Boolean))
    );

    const teams = uniqueTeamNames.length
      ? await this.teamInfoRepo.find({
          select: {
            id: true,
            city: true,
            teamlogo: true,
            nickname: true,
            shortname: true,
          },
          where: {
            shortname: In(uniqueTeamNames),
          },
        })
      : [];

    const teamMap = new Map(teams.map((team) => [team.shortname, team]));

    return items.map((item) => ({
      ...item,
      teamInfo: teamMap.get(item.team_name) ?? null,
    }));
  }
}
