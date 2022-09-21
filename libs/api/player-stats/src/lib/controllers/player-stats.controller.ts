import {
  StatPlayerLeadersDto,
  StatPlayersHistoryDto,
  StatUserPlayersHistoryDto,
} from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import {
  ApiPlayerAllTimeStatsService,
  ApiPlayerLeadersStatsService,
  ApiPlayerStatsService,
  ApiUserPlayerStatsService,
} from '../services';

@Controller('player-stats')
export class PlayerStatsController {
  constructor(
    private playerLeaderStatsService: ApiPlayerLeadersStatsService,
    private playerStatsService: ApiPlayerStatsService,
    private playerAllTimeStatsService: ApiPlayerAllTimeStatsService,
    private userPlayersStatsService: ApiUserPlayerStatsService
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

  @Get('/current/:season/:seasonType/:playerId')
  async getPlayerStatsByPlayerId(@Param() param): Promise<any[]> {
    const stats = await this.playerStatsService.getPlayerStatsByPlayerId(
      param.season,
      param.seasonType,
      param.playerId
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

  @Get('/user/:userId/history/:seasonType')
  async getTeamPlayerStatsBySeasonType(
    @Param() param
  ): Promise<StatUserPlayersHistoryDto[]> {
    const record =
      await this.userPlayersStatsService.getUserPlayerStatsBySeasonType(
        param.userId,
        param.seasonType
      );

    if (!record) {
      throw new NotFoundException('Team Players Stats not found');
    }
    return record;
  }

  @Get('/user/:userId/history/all/:seasonType')
  async getTeamPlayerStatsAllTimeBySeasonType(
    @Param() param
  ): Promise<StatUserPlayersHistoryDto[]> {
    const record =
      await this.userPlayersStatsService.getUserPlayerStatsAllTimeBySeasonType(
        param.userId,
        param.seasonType
      );

    if (!record) {
      throw new NotFoundException('Team Players Stats not found');
    }
    return record;
  }
}
