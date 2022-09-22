import { Awards_V2 } from '@api/entities';
import { UserAwardDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiUserAwardsService {
  constructor(
    @InjectRepository(Awards_V2) private repo: Repository<Awards_V2>
  ) {}

  async getAwardsByUserId(userId: number): Promise<UserAwardDto[]> {
    return await this.repo.find({
      select: {
        id: true,
        display_season: true,
        award_type: {
          id: true,
          display_name: true,
        },
        users_id: {
          id: true,
          firstname: true,
          lastname: true,
        },
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
        },
        team_id: {
          id: true,
          teamlogo: true,
          teamcolor: true,
          teamtextcolor: true,
        },
      },
      relations: ['users_id', 'player_id', 'award_type', 'team_id'],
      where: {
        users_id: {
          id: userId,
        },
      },
      order: {
        display_season: 'DESC',
      },
    });
  }
}
