import { Players_Stats_V2 } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiPlayerStatsService } from '../services';

@Controller('player-stats')
export class PlayerStatsController {
  constructor(private playerStatsService: ApiPlayerStatsService) {}

  @Get('/leaders/:season/:seasonType')
  async getTeamStatsBySeasonByType(
    @Param() param
  ): Promise<Players_Stats_V2[]> {
    const stats = await this.playerStatsService.getPlayerStatsLeaders(
      param.season,
      param.seasonType
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }
}
