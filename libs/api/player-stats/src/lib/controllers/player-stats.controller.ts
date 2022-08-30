import { StatPlayerAllDto, StatPlayerLeadersDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import {
  ApiPlayerLeadersStatsService,
  ApiPlayerStatsService,
} from '../services';

@Controller('player-stats')
export class PlayerStatsController {
  constructor(
    private playerLeaderStatsService: ApiPlayerLeadersStatsService,
    private playerStatsService: ApiPlayerStatsService
  ) {}

  @Get('/leaders/:season/:seasonType')
  async getPlayerStatsLeaders(@Param() param): Promise<StatPlayerLeadersDto> {
    const stats = await this.playerLeaderStatsService.getPlayerStatsLeaders(
      param.season,
      param.seasonType
    );

    if (!stats) {
      throw new NotFoundException('Player Leader Stats not found');
    }
    return stats;
  }

  @Get('/all/:season/:seasonType')
  async getPlayerStatsAll(@Param() param): Promise<StatPlayerAllDto[]> {
    const stats = await this.playerStatsService.getAllStats(
      param.season,
      param.seasonType
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }
}
