import {
  Goalies_Stats_V2,
  Goalie_Ratings_V2,
  Players_Stats_V2,
  Players_V2,
  Player_Ratings_V2,
  Salaries_V2,
  Teams_V2,
} from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, Observable, of } from 'rxjs';
import { SalaryAllDto } from '@cha/shared/entities';

@Injectable()
export class ApiSalariesService {
  nhlAPI = 'https://api-web.nhle.com/v1/player';

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

    const allSalariesAndRatingsForPlayersInSeasonWithTeamInfo =
      await this.setTeamInfo(allSalariesAndRatingsForPlayersInSeason);

    return allSalariesAndRatingsForPlayersInSeasonWithTeamInfo;
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

    const allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo =
      await this.setTeamInfo(allSalariesAndRatingsForGoaliesInSeason);

    return allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo;
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

    const allSalariesAndRatingsForPlayersInSeasonWithTeamInfo =
      await this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);

    return allSalariesAndRatingsForPlayersInSeasonWithTeamInfo;
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

    const allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo =
      await this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);

    return allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo;
  }

  private async setPlayersSalaries(array: any[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        salaries: await this.getSalary(item.player_id.id),
      }))
    );
  }

  private async getSalary(playerId: number) {
    // TODO UPDATE EVERY SEASON
    return await this.repo.findOne({
      select: {
        id: true,
        player_id: true,
        season_2024: true,
        season_2025: true,
        season_2026: true,
        season_2027: true,
      },
      where: {
        player_id: playerId.toString(),
      },
    });
  }

  private async setPlayerRating(array: any[], season: string) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        ratings: await this.getPlayerRating(item.player_id.id, season),
      }))
    );
  }

  private async setGoalieRating(array: any[], season: string) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        ratings: await this.getGoalieRating(item.player_id.id, season),
      }))
    );
  }

  private async getGoalieRating(playerId: number, season: string) {
    return await this.goalieRatingsRepo.findOne({
      select: {
        id: true,
        passing: true,
        speed: true,
        skating: true,
        wins: true,
        goals_against_avg: true,
        save_pct: true,
        games_played: true,
      },
      where: {
        player_id: playerId,
        playing_year: season,
      },
    });
  }

  private async getPlayerRating(playerId: number, season: string) {
    return await this.playerRatingsRepo.findOne({
      select: {
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
      },
      where: {
        player_id: playerId,
        playing_year: season,
      },
    });
  }

  private async setTeamInfo(array: any[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getTeamInfo(item.team_name),
      }))
    );
  }

  private async getTeamInfo(teamName: string) {
    if (teamName) {
      return await this.teamsRepo.findOne({
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
    } else {
      return {};
    }
  }

  private async setNHLStats(array: any[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        nhlHeadShot: await this.getNhlPlayerHeadShotByPlayerId(
          item.player_id.nhl_id
        ),
        nhlStats: await this.getNhlPlayerStatsByPlayerId(
          item.player_id.nhl_id,
          '20242025'
        ), // TODO UPDATE EVERY SEASON
        nextNhlStats: await this.getNhlPlayerStatsByPlayerId(
          item.player_id.nhl_id,
          '20252026'
        ), // TODO UPDATE EVERY SEASON
      }))
    );
  }

  async getNhlPlayerHeadShotByPlayerId(
    playerId: number
  ): Promise<Observable<any>> {
    const stats = this.httpService.get(`${this.nhlAPI}/${playerId}/landing`);

    const response = await firstValueFrom(stats);

    return response.data.headshot;
  }

  async getNhlPlayerStatsByPlayerId(
    playerId: number,
    season: string
  ): Promise<Observable<any>> {
    const stats = this.httpService.get(`${this.nhlAPI}/${playerId}/landing`);

    const response = await firstValueFrom(stats);

    console.log(response);

    return response.data.featuredStats.regularSeason.subSeason;
  }

  async getAll(): Promise<Salaries_V2[]> {
    const salaries = await this.repo.find();

    const salariesWithPlayerInfo = await this.setPlayerInfo(salaries);

    return salariesWithPlayerInfo;
  }

  private async setPlayerInfo(array: any[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        playerInfo: await this.getPlayerInfo(item.player_id),
      }))
    );
  }

  private async getPlayerInfo(playerId: number) {
    if (playerId) {
      return await this.playersRepo.findOne({
        select: {
          id: true,
          firstname: true,
          lastname: true,
        },
        where: {
          id: playerId,
        },
      });
    } else {
      return {};
    }
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
