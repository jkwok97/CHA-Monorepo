import { Players_V2, Player_Ratings_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class ApiPlayerRatingsService {
  constructor(
    @InjectRepository(Player_Ratings_V2)
    private readonly repo: Repository<Player_Ratings_V2>,
    @InjectRepository(Players_V2)
    private readonly playersRepo: Repository<Players_V2>
  ) {}

  async getAll(season: string): Promise<Player_Ratings_V2[]> {
    const ratings = await this.repo.find({
      where: {
        playing_year: season,
      },
    });

    if (ratings.length === 0) {
      return [];
    }

    const uniquePlayerIds = Array.from(
      new Set(
        ratings
          .map((r: any) =>
            typeof r.player_id === 'object' && r.player_id !== null
              ? r.player_id.id
              : r.player_id
          )
          .filter(Boolean)
      )
    );

    const players = uniquePlayerIds.length
      ? await this.playersRepo.find({
          select: {
            id: true,
            firstname: true,
            lastname: true,
          },
          where: {
            id: In(uniquePlayerIds),
          },
        })
      : [];

    const playerMap = new Map(players.map((p) => [p.id, p]));

    return ratings.map((item: any) => {
      const pid =
        typeof item.player_id === 'object' && item.player_id !== null
          ? item.player_id.id
          : item.player_id;

      return {
        ...item,
        playerInfo: playerMap.get(pid) ?? null,
      };
    }) as Player_Ratings_V2[];
  }

  async updatePlayerById(id: number, attrs: Partial<Player_Ratings_V2>) {
    const player = await this.repo.findOneBy({ id });

    if (!player) {
      throw new NotFoundException(`Player rating with id ${id} not found`);
    }

    Object.assign(player, attrs);
    return this.repo.save(player);
  }

  async deleteRating(id: number): Promise<Player_Ratings_V2> {
    const rating = await this.repo.findOneBy({ id });

    if (!rating) {
      throw new NotFoundException(`Player rating with id ${id} not found`);
    }

    return this.repo.remove(rating);
  }
}
