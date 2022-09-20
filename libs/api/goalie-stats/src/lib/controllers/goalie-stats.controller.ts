import { StatGoalieLeadersDto, StatGoaliesHistoryDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { stat } from 'fs';
import {
  ApiGoalieAllTimeStatsService,
  ApiGoalieStatsLeadersService,
  ApiGoalieStatsService,
} from '../services';

@Controller('goalie-stats')
export class GoalieStatsController {
  constructor(
    private goalieStatsLeadersService: ApiGoalieStatsLeadersService,
    private goalieStatsService: ApiGoalieStatsService,
    private goalieAllTimeStatsService: ApiGoalieAllTimeStatsService
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

  
  @Get('/current/:season/:seasonType/:playerId')
  async getGoalieStatsByPlayerId(@Param() param): Promise<any[]> {
    const stats = await this.goalieStatsService.getGoalieStatsByPlayerId(
      param.season,
      param.seasonType,
      param.player_id
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  
  @Get('/history/season/:seasonType')
  async getAllTimePlayerStatsBySeasonByType(
    @Param() param
  ): Promise<StatGoaliesHistoryDto[]> {
    const stats =
      await this.goalieAllTimeStatsService.getAllTimeGoalieStatsBySeasonByType(
        param.seasonType
      );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Goalie Stats not found');
    }
    return stats;
  }

  @Get('/history/all-time/:seasonType')
  async getAllTimeGoalieStatsSummedBySeasonByType(
    @Param() param
  ): Promise<StatGoaliesHistoryDto[]> {
    const stats =
      await this.goalieAllTimeStatsService.getAllTimeGoalieStatsSummedBySeasonByType(
        param.seasonType
      );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Goalie Stats not found');
    }
    return stats;
  }
}
