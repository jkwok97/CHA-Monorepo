import {
  Awards_V2,
  AwardTypeEnum,
  Players_Stats_V2,
} from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiAwardsService {
  constructor(
    @InjectRepository(Awards_V2) private repo: Repository<Awards_V2>
  ) {}

  async getChampions(): Promise<Awards_V2[]> {
    return await this.repo.find({
      relations: ['users_id', 'team_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.CHAMPION,
        },
      },
    });
  }

  async getScorerAwards() {
    return await this.repo
      .createQueryBuilder('awards_v2')
      .leftJoinAndSelect(
        'awards_v2.award_type',
        'award_type_v2',
        'award_type_v2.id'
      )
      .leftJoinAndSelect('awards_v2.team_id', 'teams_v2.id')
      .leftJoinAndSelect('awards_v2.users_id', 'users_v2.id')
      .leftJoinAndSelect('awards_v2.player_id', 'players_v2.id')
      .leftJoinAndSelect(
        Players_Stats_V2,
        'players_stats_v2',
        'players_stats_v2.player_id = awards_v2.player_id and players_stats_v2.playing_year = awards_v2.cha_season'
      )
      .addSelect([
        'players_stats_v2.games_played',
        'players_stats_v2.goals',
        'players_stats_v2.assists',
        'players_stats_v2.points',
      ])
      // .where('award_type_v2.id = :award_type', {
      //   award_type: AwardTypeEnum.SCORER,
      // })
      .where('players_stats_v2.season_type = :season_type', {
        season_type: 'Regular',
      })
      .orderBy('awards_v2.display_season', 'DESC')
      .getMany();

    // return await this.repo.find({
    //   relations: ['users_id', 'team_id', 'player_id'],
    //   where: { award_type: AwardTypeEnum.SCORER },
    // });
  }

  async getDefenseAwards(): Promise<Awards_V2[]> {
    return await this.repo.find({
      relations: ['users_id', 'team_id', 'player_id'],
      where: {
        award_type: {
          id: AwardTypeEnum.DEFENSE,
        },
      },
    });
  }

  async getRookieAwards(): Promise<Awards_V2[]> {
    return await this.repo.find({
      relations: ['users_id', 'team_id', 'player_id'],
      where: {
        award_type: {
          id: AwardTypeEnum.ROOKIE,
        },
      },
    });
  }

  async getGoalieAwards(): Promise<Awards_V2[]> {
    return await this.repo.find({
      relations: ['users_id', 'team_id', 'player_id'],
      where: {
        award_type: {
          id: AwardTypeEnum.GOALIE,
        },
      },
    });
  }

  async getGmAwards(): Promise<Awards_V2[]> {
    return await this.repo.find({
      relations: ['users_id', 'team_id'],
      where: {
        award_type: {
          id: AwardTypeEnum.GM,
        },
      },
    });
  }

  async getSeasonAwards(): Promise<Awards_V2[]> {
    return await this.repo.find({
      relations: ['users_id', 'team_id'],
      where: {
        award_type: {
          id: AwardTypeEnum.SEASON,
        },
      },
    });
  }
}
