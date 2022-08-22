import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiNhlService } from '../services';

@Controller('nhl')
export class NhlController {
  constructor(private nhlService: ApiNhlService) {}

  @Get('/nhl-leaders/:season/:playerType/:statType')
  async getNhlLeaders(@Param() param) {
    console.log(param);
    const nhlLeaders = await this.nhlService.getNhlLeaders(
      param.playerType,
      param.statType,
      param.season
    );

    console.log('nhlLeaders:', nhlLeaders);

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }
}
