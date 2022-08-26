import { StatPlayerLeadersDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiPlayerStatsService } from '../services';

@Controller('player-stats')
export class PlayerStatsController {
  constructor(private playerStatsService: ApiPlayerStatsService) {}

  @Get('/leaders/:season/:seasonType')
  async getPlayerStatsLeaders(@Param() param): Promise<StatPlayerLeadersDto> {
    const stats = await this.playerStatsService.getPlayerStatsLeaders(
      param.season,
      param.seasonType
    );

    if (!stats) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }
}
