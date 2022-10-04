import { Players_V2 } from '@api/entities';
import { PlayerCreateDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiPlayerInfoService {
  constructor(
    @InjectRepository(Players_V2) private repo: Repository<Players_V2>
  ) {}

  async getAll(): Promise<Players_V2[]> {
    return await this.repo.find();
  }

  async updatePlayerById(id: number, attrs: Partial<Players_V2>) {
    const player = await this.repo.findOneByOrFail({ id });

    if (!player) {
      throw new NotFoundException('player not found');
    }

    Object.assign(player, attrs);

    return this.repo.save(player);
  }

  async addPlayer(body: PlayerCreateDto) {
    const player = await this.repo.create(body);

    return this.repo.save(player);
  }

  async deletePlayer(id: number): Promise<Players_V2> {
    const player = await this.repo.findOneByOrFail({ id });

    if (!player) {
      throw new NotFoundException('player not found');
    }
    return this.repo.remove(player);
  }
}
