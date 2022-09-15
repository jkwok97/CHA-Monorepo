import { StatPlayerLeadersDto, StatPlayersHistoryDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import {
  ApiPlayerAllTimeStatsService,
  ApiPlayerLeadersStatsService,
  ApiPlayerStatsService,
} from '../services';

@Controller('player-stats')
export class PlayerStatsController {
  constructor(
    private playerLeaderStatsService: ApiPlayerLeadersStatsService,
    private playerStatsService: ApiPlayerStatsService,
    private playerAllTimeStatsService: ApiPlayerAllTimeStatsService
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
  async getPlayerStatsAll(@Param() param): Promise<any[]> {
    const stats = await this.playerStatsService.getAllStats(
      param.season,
      param.seasonType
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  @Get('/history/season/:seasonType')
  async getAllTimePlayerStatsBySeasonByType(
    @Param() param
  ): Promise<StatPlayersHistoryDto[]> {
    const stats =
      await this.playerAllTimeStatsService.getAllTimePlayerStatsBySeasonByType(
        param.seasonType
      );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  @Get('/history/all-time/:seasonType')
  async getAllTimePlayerStatsSummedBySeasonByType(
    @Param() param
  ): Promise<StatPlayersHistoryDto[]> {
    const stats =
      await this.playerAllTimeStatsService.getAllTimePlayerStatsSummedBySeasonByType(
        param.seasonType
      );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }
}
