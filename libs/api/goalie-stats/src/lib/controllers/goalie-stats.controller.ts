import { StatGoalieLeadersDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { stat } from 'fs';
import {
  ApiGoalieStatsLeadersService,
  ApiGoalieStatsService,
} from '../services';

@Controller('goalie-stats')
export class GoalieStatsController {
  constructor(
    private goalieStatsLeadersService: ApiGoalieStatsLeadersService,
    private goalieStatsService: ApiGoalieStatsService
  ) {}

  @Get('/leaders/:season/:seasonType/:minGames')
  async getGoalieStatsLeaders(@Param() param): Promise<StatGoalieLeadersDto> {
    const stats = await this.goalieStatsLeadersService.getGoalieStatsLeaders(
      param.season,
      param.seasonType,
      param.minGames
    );

    if (!stats) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  @Get('/all/:season/:seasonType')
  async getAllGoalieStats(@Param() param): Promise<any[]> {
    const stats = await this.goalieStatsService.getAllGoalieStats(
      param.season,
      param.seasonType
    );

    if (!stats || stat.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }
}
