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

  async getAllSalaries(season: string) {
    const allSalaries = await this.repo.find({
      select: {
        id: true,
        season_2022: true,
        season_2023: true,
        season_2024: true,
        season_2025: true,
        player_id: true,
      },
    });

    const allSalariesWithPlayerInfo = await this.setPlayersInfo(allSalaries);

    console.log(allSalariesWithPlayerInfo[0]);

    // const allSalariesWithTeam = await this.setTeam(
    //   allSalariesWithPlayerInfo,
    //   season
    // );

    // console.log(allSalariesWithTeam[0]);

    // const allSalariesWithTeamAndInfo = await this.setTeamInfo(
    //   allSalariesWithTeam
    // );

    // console.log(allSalariesWithTeamAndInfo[0]);

    // const allSalariesWithTeamAndInfoAndRatings = await this.setPlayerRating(
    //   allSalariesWithTeamAndInfo,
    //   season
    // );

    // console.log(allSalariesWithTeamAndInfoAndRatings[0]);

    return allSalariesWithPlayerInfo;
  }

  private async setPlayerRating(array: any[], season: string) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        playerRating: await this.getPlayerRating(
          item.player.player_id,
          item.player.isgoalie,
          season
        ),
      }))
    );
  }

  private async getPlayerRating(
    playerId: string,
    isGoalie: boolean,
    season: string
  ) {
    if (isGoalie) {
      return await this.goalieRatingsRepo.findOne({
        select: {
          id: true,
          passing: true,
          speed: true,
          skating: true,
        },
        where: {
          player_id: Number(playerId),
        },
      });
    } else {
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
          player_id: Number(playerId),
          playing_year: season,
        },
      });
    }
  }

  private async setTeamInfo(array: any[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getTeamInfo(item.team.team_name),
      }))
    );
  }

  private async getTeamInfo(teamName: string) {
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
  }

  private async setTeam(array: any[], playingYear: string) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        team: await this.getTeam(
          item.player_id,
          playingYear,
          item.player.isgoalie
        ),
      }))
    );
  }

  private async getTeam(
    playerId: string,
    playingYear: string,
    isGoalie: boolean
  ) {
    if (isGoalie) {
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
    } else {
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
