import { Goalies_Stats_V2 } from '@api/entities';
import {
  StatGoalieAllDto,
  StatGoalieLeadersDto,
  StatGoaliesHistoryDto,
  StatPlayerAwardDto,
  StatUserGoaliesHistoryDto,
} from '@cha/shared/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import {
  ApiGoalieAllTimeStatsService,
  ApiGoalieStatsLeadersService,
  ApiGoalieStatsService,
  ApiUserGoalieStatsService,
} from '../services';

@Controller('goalie-stats')
export class GoalieStatsController {
  constructor(
    private goalieStatsLeadersService: ApiGoalieStatsLeadersService,
    private goalieStatsService: ApiGoalieStatsService,
    private goalieAllTimeStatsService: ApiGoalieAllTimeStatsService,
    private userGoalieStatsService: ApiUserGoalieStatsService
  ) {}

  @Get('/:season')
  async getAllPlayers(@Param() param): Promise<StatGoalieAllDto[]> {
    const players = await this.goalieStatsService.getAll(param.season);

    if (!players || players.length < 1) {
      throw new NotFoundException('players not found');
    }
    return players;
  }

  @Put('/:season/:id')
  updatePlayerById(@Param() param, @Body() body): Promise<Goalies_Stats_V2> {
    return this.goalieStatsService.updateGoalieById(
      parseInt(param.id),
      param.season,
      body
    );
  }

  @Delete('/:season/:id')
  deletePlayer(@Param() param) {
    return this.goalieStatsService.deleteGoalie(
      parseInt(param.id),
      param.season
    );
  }

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

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  @Get('/current/:season/:seasonType/:playerId')
  async getGoalieStatsByPlayerId(@Param() param): Promise<any[]> {
    const stats = await this.goalieStatsService.getGoalieStatsByPlayerId(
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

  @Get('/user/:userId/history/:seasonType')
  async getTeamGaoliesStatsBySeasonType(
    @Param() param
  ): Promise<StatUserGoaliesHistoryDto[]> {
    const record =
      await this.userGoalieStatsService.getUserGoaliesStatsBySeasonType(
        param.userId,
        param.seasonType
      );

    if (!record) {
      throw new NotFoundException('Team Goalies Stats not found');
    }
    return record;
  }

  @Get('/user/:userId/history/all/:seasonType')
  async getTeamGoaliesStatsAllTimeBySeasonType(
    @Param() param
  ): Promise<StatUserGoaliesHistoryDto[]> {
    const record =
      await this.userGoalieStatsService.getUserGoaliesStatsAllTimeBySeasonType(
        param.userId,
        param.seasonType
      );

    if (!record) {
      throw new NotFoundException('Team Goalies Stats not found');
    }
    return record;
  }

  @Get('/team/:teamName/:season')
  async getTeamPlayersByTeamName(
    @Param() param
  ): Promise<StatPlayerAwardDto[]> {
    const record = await this.userGoalieStatsService.getTeamPlayersByTeamName(
      param.teamName,
      param.season
    );

    if (!record) {
      throw new NotFoundException('Team Players Stats not found');
    }
    return record;
  }
}
