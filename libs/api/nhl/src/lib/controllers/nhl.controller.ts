import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiNhlService } from '../services';

@Controller('nhl')
export class NhlController {
  constructor(private nhlService: ApiNhlService) {}

  @Get('/nhl-leaders/:season/:playerType/:statType')
  async getNhlLeaders(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlLeaders(
      param.playerType,
      param.statType,
      param.season
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }

  @Get('/nhl-leaders/:season/:playerType/:statType/:minGames')
  async getNhlGoalieLeaders(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlGoalieLeaders(
      param.playerType,
      param.statType,
      param.season,
      param.minGames
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }

  @Get('/nhl-rookie-leaders/:season/:playerType/:statType/:minGames')
  async getNhlRookieLeaders(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlRookieLeaders(
      param.playerType,
      param.statType,
      param.season,
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }

  @Get('/nhl-defense-leaders/:season/:playerType/:statType/:minGames')
  async getNhlDefenseLeaders(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlDefenseLeaders(
      param.playerType,
      param.statType,
      param.season,
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }
}
