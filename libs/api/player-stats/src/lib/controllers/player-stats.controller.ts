import { Players_Stats_V2 } from '@api/entities';
import {
  CreateStatPlayerAllDto,
  StatPlayerAllDto,
  StatPlayerLeadersDto,
  StatPlayersHistoryDto,
  StatUserPlayersHistoryDto,
} from '@cha/shared/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get('/:season')
  async getAllPlayers(@Param() param): Promise<StatPlayerAllDto[]> {
    const players = await this.playerStatsService.getAll(param.season);

    if (!players || players.length < 1) {
      throw new NotFoundException('players not found');
    }
    return players;
  }

  @Put('/:season/:id')
  updatePlayerById(@Param() param, @Body() body): Promise<Players_Stats_V2> {
    return this.playerStatsService.updatePlayerById(
      parseInt(param.id),
      param.season,
      body
    );
  }

  @Post('/add')
  addPlayer(@Body() body: CreateStatPlayerAllDto) {
    return this.playerStatsService.addPlayer(body);
  }

  @Delete('/:season/:id')
  deletePlayer(@Param() param) {
    return this.playerStatsService.deletePlayer(
      parseInt(param.id),
      param.season
    );
  }

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
