import { Draft_Order_V2 } from '@api/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiDraftTableService } from '../services';

@Controller('draft-table')
export class DraftTableController {
  constructor(private draftTableService: ApiDraftTableService) {}

  @Get('/:draft_year/:playing_year')
  async getDraftTableByYearByStandings(
    @Param() param: any
  ): Promise<Draft_Order_V2[]> {
    const draftTable =
      await this.draftTableService.getDraftTableByYearByStandings(
        param.draft_year,
        param.playing_year
      );

    if (!draftTable || draftTable.length < 1) {
      throw new NotFoundException('Draft Table not found');
    }
    return draftTable;
  }
}
