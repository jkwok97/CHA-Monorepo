import { Drafts_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiEntryDraftService {
  constructor(
    @InjectRepository(Drafts_V2) private repo: Repository<Drafts_V2>
  ) {}

  async getAll(): Promise<Drafts_V2[]> {
    const draftTable = await this.repo.find({
      relations: ['team_id', 'player_id', 'pick_team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          nickname: true,
          teamlogo: true,
        },
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
        },
        pick_team_id: {
          id: true,
          city: true,
          nickname: true,
          teamlogo: true,
        },
      },
      order: {
        draft_year: 'DESC',
        draft_round: 'ASC',
        draft_overall: 'ASC',
      },
    });

    return draftTable;
  }

  async updatePickById(id: number, attrs: Partial<Drafts_V2>) {
    const pick = await this.repo.findOneByOrFail({ id });

    if (!pick) {
      throw new NotFoundException('player not found');
    }

    Object.assign(pick, attrs);

    return this.repo.save(pick);
  }

  async addPick(body: any) {
    const pick = await this.repo.create(body);

    return this.repo.save(pick);
  }

  async deletePick(id: number): Promise<Drafts_V2> {
    const pick = await this.repo.findOneByOrFail({ id });

    if (!pick) {
      throw new NotFoundException('player not found');
    }
    return this.repo.remove(pick);
  }
}
