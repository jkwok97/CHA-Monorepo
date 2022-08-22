import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { ApiNhlService } from '../services';

@Controller('nhl')
export class NhlController {
  constructor(private nhlService: ApiNhlService) {}

  @Get('/nhl-leaders/:season&:playerType&:statType')
  async getNhlLeaders(@Query() query) {
    const nhlLeaders = await this.nhlService.getNhlLeaders(
      query.playerType,
      query.statType,
      query.season
    );

    if (!nhlLeaders || nhlLeaders.length < 1) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }
}
