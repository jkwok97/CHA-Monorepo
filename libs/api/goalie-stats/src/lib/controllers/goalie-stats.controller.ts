import { StatGoalieLeadersDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiGoalieStatsService } from '../services';

@Controller('goalie-stats')
export class GoalieStatsController {
  constructor(private goalieStatsService: ApiGoalieStatsService) {}

  @Get('/leaders/:season/:seasonType/:minGames')
  async getPlayerStatsLeaders(@Param() param): Promise<StatGoalieLeadersDto> {
    const stats = await this.goalieStatsService.getGoalieStatsLeaders(
      param.season,
      param.seasonType,
      param.minGames
    );

    if (!stats) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }
}
