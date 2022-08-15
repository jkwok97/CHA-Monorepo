import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Awards_V2, AwardTypeEnum } from '@cha/shared/entities';

@Injectable()
export class AwardsService {
  constructor(
    @InjectRepository(Awards_V2) private repo: Repository<Awards_V2>
  ) {}

  async getChampions(): Promise<Awards_V2[]> {
    return await this.repo.findBy({ award_type: AwardTypeEnum.CHAMPION });
  }

  async getScorerAwards(): Promise<Awards_V2[]> {
    return await this.repo.findBy({ award_type: AwardTypeEnum.SCORER });
  }

  async getDefenseAwards(): Promise<Awards_V2[]> {
    return await this.repo.findBy({ award_type: AwardTypeEnum.DEFENSE });
  }

  async getRookieAwards(): Promise<Awards_V2[]> {
    return await this.repo.findBy({ award_type: AwardTypeEnum.ROOKIE });
  }

  async getGoalieAwards(): Promise<Awards_V2[]> {
    return await this.repo.findBy({ award_type: AwardTypeEnum.GOALIE });
  }

  async getGmAwards(): Promise<Awards_V2[]> {
    return await this.repo.findBy({ award_type: AwardTypeEnum.GM });
  }

  async getSeasonAwards(): Promise<Awards_V2[]> {
    return await this.repo.findBy({ award_type: AwardTypeEnum.SEASON });
  }
}
