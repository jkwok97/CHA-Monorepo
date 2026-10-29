import {
  Goalie_Ratings_V2,
  Goalies_Stats_V2,
  NhlPlayerStatsV2,
  Player_Ratings_V2,
  Players_Stats_V2,
  Players_V2,
  Salaries_V2,
  SeasonTotal,
  Teams_V2,
} from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { SalaryAllDto } from '@cha/shared/entities';

const NHL_CONCURRENCY = 10;
const NHL_TIMEOUT_MS = 8000;
const NHL_CACHE_TTL_MS = 10 * 60 * 1000;

/** Runs `fn` over `items` with at most `limit` in flight; keeps input order. */
async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;

  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker)
  );
  return results;
}

@Injectable()
export class ApiSalariesService {
  nhlAPI = 'https://api-web.nhle.com/v2/player';
  nhlMugshotAPI = 'https://assets.nhle.com/mugs/nhl/latest';

  private nhlSeasonTotalsCache = new Map<
    string,
    { expires: number; data: Promise<SeasonTotal[]> }
  >();

  constructor(
    @InjectRepository(Salaries_V2)
    private repo: Repository<Salaries_V2>,
    @InjectRepository(Teams_V2)
    private teamsRepo: Repository<Teams_V2>,
    @InjectRepository(Players_V2)
    private playersRepo: Repository<Players_V2>,
    @InjectRepository(Players_Stats_V2)
    private playersStatsRepo: Repository<Players_Stats_V2>,
    @InjectRepository(Player_Ratings_V2)
    private playerRatingsRepo: Repository<Player_Ratings_V2>,
    @InjectRepository(Goalies_Stats_V2)
    private goaliesStatsRepo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Goalie_Ratings_V2)
    private goalieRatingsRepo: Repository<Goalie_Ratings_V2>,
    private httpService: HttpService
  ) {}

  async getAllPlayerSalaries(season: string, ratingSeason: string) {
    const allPlayersInSeason = await this.playersStatsRepo.find({
      select: {
        id: true,
        team_name: true,
        player_id: {
          id: true,
        },
      },
      where: {
        player_id: {
          isgoalie: false,
          isactive: true,
        },
        season_type: 'Regular',
        playing_year: season,
      },
    });

    const allSalariesForPlayersInSeason = await this.setPlayersSalaries(
      allPlayersInSeason
    );

    const allSalariesAndRatingsForPlayersInSeason = await this.setPlayerRating(
      allSalariesForPlayersInSeason,
      ratingSeason
    );

    return this.setTeamInfo(allSalariesAndRatingsForPlayersInSeason);
  }

  async getAllGoaliesSalaries(season: string, ratingSeason: string) {
    const allGoaliesInSeason = await this.goaliesStatsRepo.find({
      select: {
        id: true,
        team_name: true,
        player_id: {
          id: true,
        },
      },
      where: {
        player_id: {
          isgoalie: true,
        },
        season_type: 'Regular',
        playing_year: season,
      },
    });

    const allSalariesForGoaliesInSeason = await this.setPlayersSalaries(
      allGoaliesInSeason
    );

    const allSalariesAndRatingsForGoaliesInSeason = await this.setGoalieRating(
      allSalariesForGoaliesInSeason,
      ratingSeason
    );

    return this.setTeamInfo(allSalariesAndRatingsForGoaliesInSeason);
  }

  async getUserTeamPlayerSalaries(
    teamName: string,
    season: string,
    ratingsSeason: string
  ) {
    const allPlayersInSeason = await this.playersStatsRepo.find({
      select: {
        id: true,
        team_name: true,
        player_id: {
          id: true,
          nhl_id: true, // needed by setNHLStats
        },
      },
      where: {
        player_id: {
          isgoalie: false,
        },
        team_name: teamName,
        season_type: 'Regular',
        playing_year: season,
      },
    });

    const allSalariesForPlayersInSeason = await this.setPlayersSalaries(
      allPlayersInSeason
    );

    const allSalariesAndRatingsForPlayersInSeason = await this.setPlayerRating(
      allSalariesForPlayersInSeason,
      ratingsSeason
    );

    const allSalariesRatingsNHLStatsForPlayersInSeason = await this.setNHLStats(
      allSalariesAndRatingsForPlayersInSeason
    );

    return this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);
  }

  async getUserTeamGoaliesSalaries(
    teamName: string,
    season: string,
    ratingsSeason: string
  ) {
    const allGoaliesInSeason = await this.goaliesStatsRepo.find({
      select: {
        id: true,
        team_name: true,
        player_id: {
          id: true,
          nhl_id: true, // needed by setNHLStats
        },
      },
      where: {
        player_id: {
          isgoalie: true,
        },
        team_name: teamName,
        season_type: 'Regular',
        playing_year: season,
      },
    });

    const allSalariesForGoaliesInSeason = await this.setPlayersSalaries(
      allGoaliesInSeason
    );

    const allSalariesAndRatingsForGoaliesInSeason = await this.setGoalieRating(
      allSalariesForGoaliesInSeason,
      ratingsSeason
    );

    const allSalariesRatingsNHLStatsForPlayersInSeason = await this.setNHLStats(
      allSalariesAndRatingsForGoaliesInSeason
    );

    return this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);
  }

  // One query for all salaries instead of one per player
  private async setPlayersSalaries(array: any[]) {
    if (!array.length) return array;

    // TODO UPDATE EVERY SEASON
    const salaries = await this.repo.find({
      select: {
        id: true,
        player_id: true,
        season_2025: true,
        season_2026: true,
        season_2027: true,
        season_2028: true,
      },
      where: {
        player_id: In(array.map((item) => String(item.player_id.id))),
      },
    });

    const salaryByPlayerId = new Map<string, Salaries_V2>();
    for (const salary of salaries) {
      const key = String(salary.player_id);
      if (!salaryByPlayerId.has(key)) salaryByPlayerId.set(key, salary);
    }

    return array.map((item) => ({
      ...item,
      salaries: salaryByPlayerId.get(String(item.player_id.id)) ?? null,
    }));
  }

  private setPlayerRating(array: any[], season: string) {
    return this.setRatings(array, this.playerRatingsRepo, season, {
      id: true,
      c_rate: true,
      l_rate: true,
      r_rate: true,
      ld_rate: true,
      rd_rate: true,
      skating: true,
      speed: true,
      passing: true,
      shooting: true,
      face_off: true,
      forecheck: true,
      assist_rating: true,
      clear_crease: true,
      shot_block: true,
      pk: true,
      physical: true,
      rock: true,
      intimidation: true,
      game_fatigue: true,
      shift_fatigue: true,
      points: true,
      goals: true,
      assists: true,
      shots: true,
      shooting_pct: true,
      games_played: true,
    });
  }

  private setGoalieRating(array: any[], season: string) {
    return this.setRatings(array, this.goalieRatingsRepo, season, {
      id: true,
      passing: true,
      speed: true,
      skating: true,
      wins: true,
      goals_against_avg: true,
      save_pct: true,
      games_played: true,
    });
  }

  // One query for all ratings instead of one per player
  private async setRatings(
    array: any[],
    ratingsRepo: Repository<any>,
    season: string,
    select: Record<string, boolean>
  ) {
    if (!array.length) return array;

    const ratings = await ratingsRepo.find({
      // player_id is only selected so rows can be matched back to players
      select: { ...select, player_id: true } as any,
      where: {
        player_id: In(array.map((item) => item.player_id.id)),
        playing_year: season,
      },
    });

    const ratingByPlayerId = new Map<string, any>();
    for (const { player_id, ...rating } of ratings) {
      const key = String(player_id?.id ?? player_id);
      if (!ratingByPlayerId.has(key)) ratingByPlayerId.set(key, rating);
    }

    return array.map((item) => ({
      ...item,
      ratings: ratingByPlayerId.get(String(item.player_id.id)) ?? null,
    }));
  }

  // One query for all teams instead of one per row
  private async setTeamInfo(array: any[]) {
    const teamNames = [
      ...new Set(array.map((item) => item.team_name).filter(Boolean)),
    ];

    const teams = teamNames.length
      ? await this.teamsRepo.find({
          select: {
            id: true,
            city: true,
            teamlogo: true,
            nickname: true,
            shortname: true,
          },
          where: { shortname: In(teamNames) },
        })
      : [];

    const teamByName = new Map<string, any>();
    for (const { shortname, ...team } of teams) {
      if (!teamByName.has(shortname)) teamByName.set(shortname, team);
    }

    return array.map((item) => ({
      ...item,
      teamInfo: item.team_name ? teamByName.get(item.team_name) ?? null : {},
    }));
  }

  // One NHL request per player (cached), max NHL_CONCURRENCY at a time
  private async setNHLStats(array: any[]) {
    return mapWithConcurrency(array, NHL_CONCURRENCY, async (item) => {
      const nhlId = item.player_id.nhl_id;
      const seasonTotals = await this.getNhlSeasonTotals(nhlId);

      return {
        ...item,
        nhlHeadShot: await this.getNhlPlayerHeadShotByPlayerId(nhlId),
        nhlStats: this.findNhlSeason(seasonTotals, '20252026'), // TODO UPDATE EVERY SEASON
        nextNhlStats: this.findNhlSeason(seasonTotals, '20262027'), // TODO UPDATE EVERY SEASON
      };
    });
  }

  async getNhlPlayerHeadShotByPlayerId(playerId: number): Promise<string> {
    return `${this.nhlMugshotAPI}/${playerId}.png`;
  }

  async getNhlPlayerStatsByPlayerId(
    playerId: number,
    season: string
  ): Promise<SeasonTotal | undefined> {
    const seasonTotals = await this.getNhlSeasonTotals(playerId);

    return this.findNhlSeason(seasonTotals, season);
  }

  private findNhlSeason(seasonTotals: SeasonTotal[], season: string) {
    return seasonTotals.find(
      (s) =>
        s.season === Number(season) &&
        s.gameTypeId === 2 &&
        s.leagueAbbrev.default === 'NHL'
    );
  }

  // Cached per player so repeat requests and both seasons share one call
  private getNhlSeasonTotals(playerId: number): Promise<SeasonTotal[]> {
    const key = String(playerId);
    const cached = this.nhlSeasonTotalsCache.get(key);

    if (cached && cached.expires > Date.now()) {
      return cached.data;
    }

    const data = firstValueFrom(
      this.httpService.get<NhlPlayerStatsV2>(
        `${this.nhlAPI}/${playerId}/player-stats`,
        { timeout: NHL_TIMEOUT_MS }
      )
    )
      .then((response) => response.data?.seasonTotals ?? [])
      .catch((err) => {
        console.error(`NHL stats failed for player ${playerId}:`, err.message);
        this.nhlSeasonTotalsCache.delete(key); // don't cache failures
        return [] as SeasonTotal[];
      });

    this.nhlSeasonTotalsCache.set(key, {
      expires: Date.now() + NHL_CACHE_TTL_MS,
      data,
    });

    return data;
  }

  async getAll(): Promise<Salaries_V2[]> {
    const salaries = await this.repo.find();

    return await this.setPlayerInfo(salaries);
  }

  // One query for all players instead of one per salary row
  private async setPlayerInfo(array: any[]) {
    const playerIds = [
      ...new Set(array.map((item) => item.player_id).filter(Boolean)),
    ];

    const players = playerIds.length
      ? await this.playersRepo.find({
          select: {
            id: true,
            firstname: true,
            lastname: true,
          },
          where: { id: In(playerIds.map(Number)) },
        })
      : [];

    const playerById = new Map(players.map((p) => [String(p.id), p]));

    return array.map((item) => ({
      ...item,
      playerInfo: item.player_id
        ? playerById.get(String(item.player_id)) ?? null
        : {},
    }));
  }

  async addSalary(body: SalaryAllDto) {
    const salary = await this.repo.create(body);

    return this.repo.save(salary);
  }

  async updateSalaryById(id: number, attrs: Partial<Salaries_V2>) {
    const salary = await this.repo.findOneByOrFail({ id });

    if (!salary) {
      throw new NotFoundException('salary not found');
    }

    Object.assign(salary, attrs);

    return this.repo.save(salary);
  }
}
