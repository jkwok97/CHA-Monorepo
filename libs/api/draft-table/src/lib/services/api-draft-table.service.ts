import { Draft_Order_V2 } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiDraftTableService {
  constructor(
    @InjectRepository(Draft_Order_V2) private repo: Repository<Draft_Order_V2>
  ) {}

  async getDraftTableByYearByStandings(
    draftYear: string,
    playingYear: string,
    seasonType: string
  ): Promise<Draft_Order_V2[]> {
    const draftTable = await this.repo.find({
      relations: ['team_id'],
      where: {
        draft_year: draftYear,
      },
    });

    return draftTable;
  }
}
