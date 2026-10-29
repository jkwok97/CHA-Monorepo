import { Drafts_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { CreateDraftPickDto } from '@cha/shared/entities';

const DRAFT_PICK_SELECT = {
  id: true,
  draft_year: true,
  draft_round: true,
  draft_overall: true,
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
} as const;

@Injectable()
export class ApiEntryDraftService {
  constructor(
    @InjectRepository(Drafts_V2)
    private readonly repo: Repository<Drafts_V2>
  ) {}

  async getAll(draftYear?: string): Promise<Drafts_V2[]> {
    const whereClause: FindOptionsWhere<Drafts_V2> = draftYear
      ? { draft_year: draftYear }
      : {};

    return this.repo.find({
      relations: {
        team_id: true,
        player_id: true,
        pick_team_id: true,
      },
      select: DRAFT_PICK_SELECT,
      where: whereClause,
      order: {
        draft_year: 'DESC',
        draft_round: 'ASC',
        draft_overall: 'ASC',
      },
    });
  }

  async updatePickById(
    id: number,
    attrs: Partial<Drafts_V2>
  ): Promise<Drafts_V2> {
    const pick = await this.repo.findOneBy({ id });

    if (!pick) {
      throw new NotFoundException(`Draft pick with id ${id} not found`);
    }

    Object.assign(pick, attrs);
    return this.repo.save(pick);
  }

  async addPick(body: CreateDraftPickDto): Promise<Drafts_V2> {
    const pick = this.repo.create({
      draft_year: body.draft_year,
      draft_round: body.draft_round,
      draft_overall: body.draft_overall,
      player_id: body.player_id ? ({ id: body.player_id } as any) : undefined,
      team_id: body.team_id ? ({ id: body.team_id } as any) : undefined,
      pick_team_id: body.pick_team_id
        ? ({ id: body.pick_team_id } as any)
        : undefined,
    });

    return this.repo.save(pick);
  }

  async deletePick(id: number): Promise<Drafts_V2> {
    const pick = await this.repo.findOneBy({ id });

    if (!pick) {
      throw new NotFoundException(`Draft pick with id ${id} not found`);
    }

    return this.repo.remove(pick);
  }
}
