import { Drafts_V2 } from '@api/entities';
import { CreateDraftPickDto, DraftPickDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put('/:id')
  updatePickById(@Param() param, @Body() body): Promise<DraftPickDto> {
    return this.draftService.updatePickById(parseInt(param.id), body);
  }

  @Post('/add')
  addPick(@Body() body: CreateDraftPickDto) {
    return this.draftService.addPick(body);
  }

  @Delete('/:id')
  deletePick(@Param() param) {
    return this.draftService.deletePick(parseInt(param.id));
  }
}
