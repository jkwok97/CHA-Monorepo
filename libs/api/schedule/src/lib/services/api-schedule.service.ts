import { Schedule_V2, Teams_V2, Team_Stats_V2 } from '@api/entities';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, IsNull, Not, Repository } from 'typeorm';

interface TeamVersusRecord {
  wins: number;
  loss: number;
  ties: number;
}

@Injectable()
export class ApiScheduleService {
  constructor(
    @InjectRepository(Schedule_V2)
    private readonly repo: Repository<Schedule_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Team_Stats_V2)
    private readonly teamStatsRepo: Repository<Team_Stats_V2>
  ) {}

  async getCompleteScheduleBySeason(season: string) {
    const schedule = await this.repo.find({
      where: {
        playing_year: season,
      },
      order: {
        game_day: 'ASC',
      },
    });

    if (schedule.length === 0) return [];

    const teamMap = await this.getTeamInfoMap(
      this.extractUniqueTeamIds(schedule)
    );

    return schedule.map((item) => ({
      ...item,
      visTeamInfo: teamMap.get(item.vis_team_id) ?? null,
      homeTeamInfo: teamMap.get(item.home_team_id) ?? null,
    }));
  }

  async getNextDays(season: string, currentDay: number) {
    const schedule = await this.repo.find({
      where: {
        playing_year: season,
        game_day: Between(currentDay, currentDay + 4),
      },
      order: {
        game_day: 'ASC',
      },
    });

    if (schedule.length === 0) return [];

    const uniqueTeamIds = this.extractUniqueTeamIds(schedule);

    const [teamMap, seasonRecordMap, finishedGames] = await Promise.all([
      this.getTeamInfoMap(uniqueTeamIds),
      this.getTeamSeasonRecordsMap(uniqueTeamIds, season),
      this.getCompletedGamesForSeason(season),
    ]);

    const teamGamesMap = this.buildTeamCompletedGamesMap(finishedGames);
    const matchupGamesMap = this.buildMatchupGamesMap(finishedGames);

    return schedule.map((item) => {
      const visId = Number(item.vis_team_id);
      const homeId = Number(item.home_team_id);

      const headToHeadGames =
        matchupGamesMap.get(this.getMatchupKey(visId, homeId)) ?? [];
      const visVersus = this.calculateVersusRecord(headToHeadGames, visId);
      const homeVersus: TeamVersusRecord = {
        wins: visVersus.loss,
        loss: visVersus.wins,
        ties: visVersus.ties,
      };

      return {
        id: item.id,
        gameDay: item.game_day,
        visTeamScore: item.vis_team_score,
        visTeamInfo: teamMap.get(visId) ?? null,
        visTeamLastFive: this.calculateLastFive(
          teamGamesMap.get(visId) ?? [],
          visId
        ),
        visTeamRecord: seasonRecordMap.get(visId) ?? null,
        visTeamVersus: visVersus,
        homeTeamScore: item.home_team_score,
        homeTeamInfo: teamMap.get(homeId) ?? null,
        homeTeamLastFive: this.calculateLastFive(
          teamGamesMap.get(homeId) ?? [],
          homeId
        ),
        homeTeamRecord: seasonRecordMap.get(homeId) ?? null,
        homeTeamVersus: homeVersus,
      };
    });
  }

  async updateGameById(gameId: number, gameData: ScheduleAllDto) {
    const game = await this.repo.findOneBy({ id: gameId });

    if (!game) {
      throw new NotFoundException(`Game with id ${gameId} not found`);
    }

    game.home_team_score = gameData.home_team_score;
    game.vis_team_score = gameData.vis_team_score;

    return this.repo.save(game);
  }

  private extractUniqueTeamIds(games: Schedule_V2[]): number[] {
    const ids = new Set<number>();
    for (const g of games) {
      if (g.home_team_id) ids.add(Number(g.home_team_id));
      if (g.vis_team_id) ids.add(Number(g.vis_team_id));
    }
    return Array.from(ids);
  }

  private async getTeamInfoMap(
    teamIds: number[]
  ): Promise<Map<number, Teams_V2>> {
    if (!teamIds.length) return new Map();

    const teams = await this.teamInfoRepo.find({
      select: {
        id: true,
        city: true,
        teamlogo: true,
        nickname: true,
        teamcolor: true,
      },
      where: { id: In(teamIds) },
    });

    return new Map(teams.map((t) => [t.id, t]));
  }

  private async getTeamSeasonRecordsMap(
    teamIds: number[],
    season: string
  ): Promise<Map<number, Team_Stats_V2>> {
    if (!teamIds.length) return new Map();

    const records = await this.teamStatsRepo.find({
      select: {
        id: true,
        wins: true,
        loss: true,
        ties: true,
        team_id: { id: true },
      },
      relations: { team_id: true },
      where: {
        team_id: { id: In(teamIds) },
        playing_year: season,
        season_type: 'Regular',
      },
    });

    return new Map(records.map((r) => [r.team_id.id, r]));
  }

  private async getCompletedGamesForSeason(
    season: string
  ): Promise<Schedule_V2[]> {
    return this.repo.find({
      select: {
        id: true,
        game_day: true,
        home_team_id: true,
        vis_team_id: true,
        home_team_score: true,
        vis_team_score: true,
      },
      where: {
        playing_year: season,
        home_team_score: Not(IsNull()),
        vis_team_score: Not(IsNull()),
      },
      order: {
        game_day: 'DESC',
      },
    });
  }

  private buildTeamCompletedGamesMap(
    games: Schedule_V2[]
  ): Map<number, Schedule_V2[]> {
    const map = new Map<number, Schedule_V2[]>();
    for (const game of games) {
      const homeId = Number(game.home_team_id);
      const visId = Number(game.vis_team_id);

      if (!map.has(homeId)) map.set(homeId, []);
      if (!map.has(visId)) map.set(visId, []);

      map.get(homeId)!.push(game);
      map.get(visId)!.push(game);
    }
    return map;
  }

  private buildMatchupGamesMap(
    games: Schedule_V2[]
  ): Map<string, Schedule_V2[]> {
    const map = new Map<string, Schedule_V2[]>();
    for (const game of games) {
      const key = this.getMatchupKey(
        Number(game.home_team_id),
        Number(game.vis_team_id)
      );
      const list = map.get(key);
      if (list) {
        list.push(game);
      } else {
        map.set(key, [game]);
      }
    }
    return map;
  }

  private getMatchupKey(teamA: number, teamB: number): string {
    return teamA < teamB ? `${teamA}_${teamB}` : `${teamB}_${teamA}`;
  }

  private calculateLastFive(
    games: Schedule_V2[],
    teamId: number
  ): ('W' | 'L' | 'T')[] {
    const results: ('W' | 'L' | 'T')[] = [];
    const limit = Math.min(games.length, 5);

    for (let i = 0; i < limit; i++) {
      const game = games[i];
      const isHome = Number(game.home_team_id) === teamId;
      const teamScore = Number(
        isHome ? game.home_team_score : game.vis_team_score
      );
      const oppScore = Number(
        isHome ? game.vis_team_score : game.home_team_score
      );

      if (teamScore > oppScore) {
        results.push('W');
      } else if (teamScore < oppScore) {
        results.push('L');
      } else {
        results.push('T');
      }
    }

    return results;
  }

  private calculateVersusRecord(
    games: Schedule_V2[],
    teamId: number
  ): TeamVersusRecord {
    let wins = 0;
    let loss = 0;
    let ties = 0;

    for (const game of games) {
      const isHome = Number(game.home_team_id) === teamId;
      const teamScore = Number(
        isHome ? game.home_team_score : game.vis_team_score
      );
      const oppScore = Number(
        isHome ? game.vis_team_score : game.home_team_score
      );

      if (teamScore > oppScore) {
        wins++;
      } else if (teamScore < oppScore) {
        loss++;
      } else {
        ties++;
      }
    }

    return { wins, loss, ties };
  }
}
