import { Goalie_Ratings_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiGoalieRatingsService {
  constructor(
    @InjectRepository(Goalie_Ratings_V2)
    private repo: Repository<Goalie_Ratings_V2>
  ) {}

  async getAll(): Promise<Goalie_Ratings_V2[]> {
    return await this.repo.find();
  }

  async updatePlayerById(id: number, attrs: Partial<Goalie_Ratings_V2>) {
    const player = await this.repo.findOneByOrFail({ id });

    if (!player) {
      throw new NotFoundException('player not found');
    }

    Object.assign(player, attrs);

    return this.repo.save(player);
  }
}
