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
    const scorers = await this.repo.find({
      relations: [
        'users_id',
        'team_id',
        'player_id',
        'award_type',
        'cha_season',
      ],
      where: {
        award_type: {
          id: AwardTypeEnum.SCORER,
        },
      },
    });

    console.log(scorers);

    const scorerStats = await this.statsRepo
      .createQueryBuilder('playerStats')
      .where(
        'playerStats.player_id = (" + scorers.getQuery().player_id.id + ") and playerStats.playing_year = (" + scorers.getQuery().cha_season + ")'
      )
      // .where(
      //   'scorers.getQuery().player_id.id = playerStats.player_id and scorers.getQuery().cha_season = playerStats.playing_year'
      // )
      .getMany();

    console.log(scorerStats);

    return {
      result: {
        scorers: {
          ...scorers,
          // stats: scorerStats,
        },
      },
    };

    // return await this.repo
    //   .createQueryBuilder('awards_v2')
    //   .leftJoinAndSelect('awards_v2.award_type', 'award_type')
    //   .where('award_type.id = :award_type', {
    //     award_type: AwardTypeEnum.SCORER,
    //   })
    //   .leftJoinAndSelect('awards_v2.team_id', 'teams')
    //   .leftJoinAndSelect('awards_v2.users_id', 'users')
    //   .leftJoinAndSelect('awards_v2.player_id', 'players')
    //   .leftJoin((sub) => {
    //     const subQuery = sub
    //       .subQuery()
    //       .select('playerStats.*', 'playerStats')
    //       .from(Players_Stats_V2, 'playerStats')
    //       .where(
    //         'awards_v2.player_id = playerStats.player_id and awards_v2.cha_season = playerStats.playing_year'
    //       )
    //       .getOne();
    //       return subQuery;
    //   })
    //   .where('playerStats.season_type = :season_type', {
    //     season_type: 'Regular',
    //   })
    //   .orderBy('awards_v2.display_season', 'DESC')
    //   .getMany();
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
