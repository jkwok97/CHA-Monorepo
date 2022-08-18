import { Draft_Order_V2 } from '@cha/shared/entities';
import { Body, Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiDraftTableService } from '../services';

@Controller('draft-table')
export class DraftTableController {
  constructor(private draftTableService: ApiDraftTableService) {}

  @Get('/season/standings')
  async getDraftTableByYearByStandings(
    @Body() body: any
  ): Promise<Draft_Order_V2[]> {
    const draftTable =
      await this.draftTableService.getDraftTableByYearByStandings(
        body.draft_year,
        body.playing_year,
        body.season_type
      );

    if (!draftTable || draftTable.length < 1) {
      throw new NotFoundException('Draft Table not found');
    }
    return draftTable;
  }
}
