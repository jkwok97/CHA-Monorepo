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
import { Repository, Not } from 'typeorm';

@Injectable()
export class ApiSalariesService {
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
    private goalieRatingsRepo: Repository<Goalie_Ratings_V2>
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

    // const allSalariesWithPlayerInfo = await this.setPlayersInfo(allSalaries);

    // console.log(allSalariesWithPlayerInfo[0]);

    // const allSalariesWithTeam = await this.setTeam(
    //   allSalariesWithPlayerInfo,
    //   season
    // );

    // const allSalariesWithTeamAndInfo = await this.setTeamInfo(
    //   allSalariesWithTeam
    // );

    // const allSalariesWithTeamAndInfoAndRatings = await this.setPlayerRating(
    //   allSalariesWithTeamAndInfo,
    //   season
    // );

    return allSalariesAndRatingsForPlayersInSeason;
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

    return allSalariesAndRatingsForGoaliesInSeason;
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
        teamInfo: await this.getTeamInfo(item.team?.team_name),
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

  private async setTeam(array: any[], playingYear: string) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        team: await this.getTeam(
          item.player_id,
          playingYear,
          item.player?.isgoalie
        ),
      }))
    );
  }

  private async getTeam(
    playerId: string,
    playingYear: string,
    isGoalie: boolean
  ) {
    if (isGoalie === true) {
      return await this.goaliesStatsRepo.findOne({
        select: {
          id: true,
          team_name: true,
        },
        where: {
          player_id: {
            id: Number(playerId),
          },
          season_type: 'Regular',
          playing_year: playingYear,
        },
      });
    } else if (isGoalie === false) {
      return await this.playersStatsRepo.findOne({
        select: {
          id: true,
          team_name: true,
        },
        where: {
          player_id: {
            id: Number(playerId),
          },
          season_type: 'Regular',
          playing_year: playingYear,
        },
      });
    }
  }

  private async setPlayersInfo(array: Salaries_V2[]) {
    return await Promise.all(
      array.map(async (item: Salaries_V2) => ({
        ...item,
        player: await this.getPlayerInfo(Number(item.player_id)),
      }))
    );
  }

  private async getPlayerInfo(playerId: number) {
    return await this.playersRepo.findOne({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        nhl_id: true,
        isgoalie: true,
      },
      where: {
        id: playerId,
      },
    });
  }
}
