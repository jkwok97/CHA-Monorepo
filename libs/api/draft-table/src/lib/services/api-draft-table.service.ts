import { Draft_Order_V2, Team_Stats_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

const TEAM_INFO_SELECT = {
  team_id: {
    id: true,
    shortname: true,
    city: true,
    nickname: true,
    teamlogo: true,
  },
} as const;

@Injectable()
export class ApiDraftTableService {
  constructor(
    @InjectRepository(Draft_Order_V2)
    private readonly repo: Repository<Draft_Order_V2>,
    @InjectRepository(Team_Stats_V2)
    private readonly teamStatsRepo: Repository<Team_Stats_V2>
  ) {}

  async getAll(draftYear: string): Promise<Draft_Order_V2[]> {
    return this.repo.find({
      relations: {
        team_id: true,
      },
      select: TEAM_INFO_SELECT,
      where: {
        draft_year: draftYear,
      },
    });
  }

  async updateTableById(
    id: number,
    attrs: Partial<Draft_Order_V2>
  ): Promise<Draft_Order_V2> {
    const item = await this.repo.findOneBy({ id });

    if (!item) {
      throw new NotFoundException(`Draft table record with id ${id} not found`);
    }

    Object.assign(item, attrs);
    return this.repo.save(item);
  }

  async getDraftTableByYearByStandings(
    draftYear: string,
    playingYear: string
  ): Promise<(Draft_Order_V2 & { stats: Team_Stats_V2 | null })[]> {
    const draftTable = await this.repo.find({
      relations: {
        team_id: true,
      },
      select: TEAM_INFO_SELECT,
      where: {
        draft_year: draftYear,
      },
    });

    if (draftTable.length === 0) {
      return [];
    }

    const uniqueTeamIds = Array.from(
      new Set(
        draftTable
          .map((entry) => entry.team_id?.id)
          .filter((id): id is number => typeof id === 'number')
      )
    );

    const teamStats = uniqueTeamIds.length
      ? await this.teamStatsRepo.find({
          relations: {
            team_id: true,
          },
          select: {
            id: true,
            wins: true,
            goals_for: true,
            goals_against: true,
            points: true,
            team_id: {
              id: true,
            },
          },
          where: {
            team_id: { id: In(uniqueTeamIds) },
            playing_year: playingYear,
            season_type: 'Regular',
          },
        })
      : [];

    const statsMap = new Map(teamStats.map((stat) => [stat.team_id.id, stat]));

    const draftTableWithStandings = draftTable.map((item) => ({
      ...item,
      stats: statsMap.get(item.team_id?.id) ?? null,
    }));

    return this.sortByReverseStandings(draftTableWithStandings);
  }

  private sortByReverseStandings<
    T extends { stats: Partial<Team_Stats_V2> | null }
  >(data: T[]): T[] {
    return [...data].sort((a, b) => {
      const aPoints = Number(a.stats?.points ?? 0);
      const bPoints = Number(b.stats?.points ?? 0);
      if (aPoints !== bPoints) return aPoints - bPoints;

      const aWins = Number(a.stats?.wins ?? 0);
      const bWins = Number(b.stats?.wins ?? 0);
      if (aWins !== bWins) return aWins - bWins;

      const aGoalDiff =
        Number(a.stats?.goals_for ?? 0) - Number(a.stats?.goals_against ?? 0);
      const bGoalDiff =
        Number(b.stats?.goals_for ?? 0) - Number(b.stats?.goals_against ?? 0);
      if (aGoalDiff !== bGoalDiff) return aGoalDiff - bGoalDiff;

      const aGoalsFor = Number(a.stats?.goals_for ?? 0);
      const bGoalsFor = Number(b.stats?.goals_for ?? 0);
      return aGoalsFor - bGoalsFor;
    });
  }
}
