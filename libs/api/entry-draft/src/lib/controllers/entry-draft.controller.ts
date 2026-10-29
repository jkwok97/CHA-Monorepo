import { Drafts_V2 } from '@api/entities';
import { CreateDraftPickDto, DraftPickDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiEntryDraftService } from '../services';

@Controller('entry-draft')
export class EntryDraftController {
  constructor(private readonly draftService: ApiEntryDraftService) {}

  @Get('/ordered')
  async getAll(): Promise<Drafts_V2[]> {
    const entries = await this.draftService.getAll();

    if (!entries || entries.length === 0) {
      throw new NotFoundException('Entry Draft Table not found');
    }
    return entries;
  }

  @Put('/:id')
  async updatePickById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Drafts_V2>
  ): Promise<DraftPickDto> {
    const updated = await this.draftService.updatePickById(id, body);
    return updated as unknown as DraftPickDto;
  }

  @Post('/add')
  async addPick(@Body() body: CreateDraftPickDto): Promise<DraftPickDto> {
    const pick = await this.draftService.addPick(body);
    return pick as unknown as DraftPickDto;
  }

  @Delete('/:id')
  async deletePick(@Param('id', ParseIntPipe) id: number): Promise<Drafts_V2> {
    return this.draftService.deletePick(id);
  }
}
