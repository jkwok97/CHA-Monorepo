import { Drafts_V2 } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiEntryDraftService {
  constructor(
    @InjectRepository(Drafts_V2) private repo: Repository<Drafts_V2>
  ) {}

  async getAll(): Promise<Drafts_V2[]> {
    const draftTable = await this.repo.find({
      relations: ['team_id', 'player_id'],
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
      },
      order: {
        draft_year: 'DESC',
        draft_round: 'ASC',
        draft_overall: 'ASC',
      },
    });

    return draftTable;
  }
}
