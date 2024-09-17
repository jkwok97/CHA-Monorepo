import { Players_V2, Player_Ratings_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiPlayerRatingsService {
  constructor(
    @InjectRepository(Player_Ratings_V2)
    private repo: Repository<Player_Ratings_V2>,
    @InjectRepository(Players_V2)
    private playersRepo: Repository<Players_V2>
  ) {}

  async getAll(season: string): Promise<Player_Ratings_V2[]> {
    const ratings = await this.repo.find({
      where: {
        playing_year: season,
      },
    });

    const ratingsWithPlayerInfo = await this.setPlayerInfo(ratings);

    return ratingsWithPlayerInfo;
  }

  async updatePlayerById(id: number, attrs: Partial<Player_Ratings_V2>) {
    const player = await this.repo.findOneByOrFail({ id });

    if (!player) {
      throw new NotFoundException('player not found');
    }

    Object.assign(player, attrs);

    return this.repo.save(player);
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

  async deleteRating(id: number): Promise<Player_Ratings_V2> {
    const rating = await this.repo.findOneByOrFail({ id });

    if (!rating) {
      throw new NotFoundException('rating not found');
    }
    return this.repo.remove(rating);
  }
}
