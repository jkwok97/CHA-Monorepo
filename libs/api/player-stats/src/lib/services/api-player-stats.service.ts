import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, In, Repository } from 'typeorm';

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
export class ApiPlayerStatsService {
  constructor(
    @InjectRepository(Players_Stats_V2)
    private readonly repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>
  ) {}

  async getAll(season: string): Promise<StatPlayerAllDto[]> {
    const players = await this.repo.find({
      where: {
        playing_year: season,
      },
    });

    const playersWithTeamInfo = await this.attachTeamInfo(players);
    return playersWithTeamInfo as unknown as StatPlayerAllDto[];
  }

  async updatePlayerById(
    id: number,
    season: string,
    attrs: Partial<Players_Stats_V2>
  ): Promise<Players_Stats_V2> {
    const player = await this.repo.findOneBy({
      player_id: {
        id,
      },
      playing_year: season,
    });

    if (!player) {
      throw new NotFoundException('player not found');
    }

    Object.assign(player, attrs);
    return this.repo.save(player);
  }

  async deletePlayer(id: number, season: string): Promise<Players_Stats_V2> {
    const player = await this.repo.findOneBy({
      id,
      playing_year: season,
    });

    if (!player) {
      throw new NotFoundException('player not found');
    }

    return this.repo.remove(player);
  }

  async getAllStats(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayerAllDto[]> {
    return this.fetchAndFormatPlayerStats({
      playing_year: season,
      season_type: seasonType,
    });
  }

  async getPlayerStatsByPlayerId(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    playerId: number
  ): Promise<StatPlayerAllDto[]> {
    return this.fetchAndFormatPlayerStats({
      playing_year: season,
      season_type: seasonType,
      player_id: {
        id: playerId,
      },
    });
  }

  private async fetchAndFormatPlayerStats(
    whereClause: FindOptionsWhere<Players_Stats_V2>
  ): Promise<StatPlayerAllDto[]> {
    const allStats = await this.repo.find({
      select: COMMON_PLAYER_STATS_SELECT,
      relations: {
        player_id: true,
      },
      where: whereClause,
      order: {
        points: 'DESC',
      },
    });

    if (allStats.length === 0) {
      return [];
    }

    const allStatsWithTeamInfo = await this.attachTeamInfo(allStats);

    return allStatsWithTeamInfo.map((stat) => ({
      ...stat,
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
      shooting_pct: Number(stat.shooting_pct),
      minutes_played: Number(stat.minutes_played),
      minutes_per_game: Number(stat.minutes_per_game),
      fo_pct: Number(stat.fo_pct),
      pass_pct: Number(stat.pass_pct),
      corner_pct: Number(stat.corner_pct),
      hits: Number(stat.hits),
      blocked_shots: Number(stat.blocked_shots),
    })) as unknown as StatPlayerAllDto[];
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
