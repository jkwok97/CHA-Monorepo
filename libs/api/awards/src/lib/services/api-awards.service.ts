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
    @InjectRepository(Awards_V2) private repo: Repository<Awards_V2>,
    @InjectRepository(Players_Stats_V2)
    private statsRepo: Repository<Players_Stats_V2>
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
    const scorers = await this.repo
      .find({
        relations: ['users_id', 'team_id', 'player_id', 'award_type'],
        where: {
          award_type: {
            id: AwardTypeEnum.SCORER,
          },
        },
      })
      .then(async (result) => {
        return await this.setStats(result);
      });

    console.log(scorers);

    return scorers;
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

  async setStats(array: Awards_V2[]) {
    console.log(array);
    return await array.map(async (item) => ({
      ...item,
      stats: await this.getStats(item.player_id.id, item.cha_season),
    }));
  }

  async getStats(playerId: number, chaSeason: string) {
    console.log(playerId, chaSeason);

    const stat = await this.statsRepo.findOne({
      where: {
        player_id: playerId,
        playing_year: chaSeason,
        season_type: 'Regular',
      },
    });

    console.log(stat);

    return await this.statsRepo.findOne({
      where: {
        player_id: playerId,
        playing_year: chaSeason,
        season_type: 'Regular',
      },
    });
  }
}
