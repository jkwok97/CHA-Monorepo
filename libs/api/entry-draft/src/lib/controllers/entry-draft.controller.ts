import { Drafts_V2 } from '@cha/shared/entities';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiEntryDraftService } from '../services';

@Controller('entry-draft')
export class EntryDraftController {
  constructor(private draftService: ApiEntryDraftService) {}

  @Get('/ordered')
  async getAll(): Promise<Drafts_V2[]> {
    const entries = await this.draftService.getAll();

    if (!entries || entries.length < 1) {
      throw new NotFoundException('Entry Draft Table not found');
    }
    return entries;
  }
}
