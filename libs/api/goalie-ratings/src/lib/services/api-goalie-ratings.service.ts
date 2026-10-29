import { Goalie_Ratings_V2, Players_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class ApiGoalieRatingsService {
  constructor(
    @InjectRepository(Goalie_Ratings_V2)
    private readonly repo: Repository<Goalie_Ratings_V2>,
    @InjectRepository(Players_V2)
    private readonly playersRepo: Repository<Players_V2>
  ) {}

  async getAll(season: string): Promise<Goalie_Ratings_V2[]> {
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
    }) as Goalie_Ratings_V2[];
  }

  async updatePlayerById(
    id: number,
    attrs: Partial<Goalie_Ratings_V2>
  ): Promise<Goalie_Ratings_V2> {
    const player = await this.repo.findOneBy({ id });

    if (!player) {
      throw new NotFoundException(`Goalie rating with id ${id} not found`);
    }

    Object.assign(player, attrs);
    return this.repo.save(player);
  }
}
