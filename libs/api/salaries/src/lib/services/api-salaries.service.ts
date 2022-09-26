import {
  Goalies_Stats_V2,
  Goalie_Ratings_V2,
  Players_Stats_V2,
  Players_V2,
  Player_Ratings_V2,
  Salaries_V2,
  Teams_V2,
} from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class ApiSalariesService {
  nhlAPI = 'https://statsapi.web.nhl.com/api/v1/people';

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

  async getAllPlayerSalaries(season: string) {
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
        season_type: 'Regular',
        playing_year: season,
      },
    });

    const allSalariesForPlayersInSeason = await this.setPlayersSalaries(
      allPlayersInSeason
    );

    const allSalariesAndRatingsForPlayersInSeason = await this.setPlayerRating(
      allSalariesForPlayersInSeason,
      season
    );

    const allSalariesAndRatingsForPlayersInSeasonWithTeamInfo =
      await this.setTeamInfo(allSalariesAndRatingsForPlayersInSeason);

    return allSalariesAndRatingsForPlayersInSeasonWithTeamInfo;
  }

  async getAllGoaliesSalaries(season: string) {
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
      season
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
    return await this.repo.findOne({
      select: {
        id: true,
        player_id: true,
        season_2022: true,
        season_2023: true,
        season_2024: true,
        season_2025: true,
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
        nhlStats: await this.getNhlPlayerStatsByPlayerId(item.player_id.nhl_id),
      }))
    );
  }

  getNhlPlayerStatsByPlayerId(
    playerId: number
  ): Observable<AxiosResponse<any[]>> {
    const stats = this.httpService
      .get(
        `${this.nhlAPI}/${playerId}/stats?stats=statsSingleSeason&season=20212022`
      )
      .pipe(
        map((response) => {
          console.log(response);
          return response.data.stats[0].splits;
        })
      );

    return stats;
  }
}
