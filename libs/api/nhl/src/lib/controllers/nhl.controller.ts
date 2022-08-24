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

  @Get('/nhl-rookie-leaders/:season/:playerType/:statType')
  async getNhlRookieLeaders(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlRookieLeaders(
      param.playerType,
      param.statType,
      param.season
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }

  @Get('/nhl-defense-leaders/:season/:playerType/:statType')
  async getNhlDefenseLeaders(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlDefenseLeaders(
      param.playerType,
      param.statType,
      param.season
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Leaders not found');
    }
    return nhlLeaders;
  }

  @Get('/nhl-summary/sportsnet/:season/:seasonType')
  async getNhlSummaryFromSportsnet(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlSummaryFromSportsnet(
      param.season,
      param.seasonType
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Summary not found');
    }
    return nhlLeaders;
  }

  @Get('/nhl-summary/rookies/:season/:player/:statsType/:sort/:start/:pageSize')
  async getNhlRookieSummary(@Param() param) {
    const nhlLeaders = await this.nhlService.getNhlRookieSummary(
      param.season,
      param.player,
      param.statsType,
      param.sort,
      param.start,
      param.pageSize
    );

    if (!nhlLeaders) {
      throw new NotFoundException('Nhl Rookie Summary not found');
    }
    return nhlLeaders;
  }
}
