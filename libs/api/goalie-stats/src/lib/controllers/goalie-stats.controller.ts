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
  ParseIntPipe,
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
    private readonly goalieStatsLeadersService: ApiGoalieStatsLeadersService,
    private readonly goalieStatsService: ApiGoalieStatsService,
    private readonly goalieAllTimeStatsService: ApiGoalieAllTimeStatsService,
    private readonly userGoalieStatsService: ApiUserGoalieStatsService
  ) {}

  @Get('/:season')
  async getAllPlayers(
    @Param('season') season: string
  ): Promise<StatGoalieAllDto[]> {
    const players = await this.goalieStatsService.getAll(season);

    if (!players || players.length === 0) {
      throw new NotFoundException(`No goalies found for season ${season}`);
    }
    return players;
  }

  @Put('/:season/:id')
  async updatePlayerById(
    @Param('season') season: string,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Goalies_Stats_V2>
  ): Promise<Goalies_Stats_V2> {
    return this.goalieStatsService.updateGoalieById(id, season, body);
  }

  @Delete('/:season/:id')
  async deletePlayer(
    @Param('season') season: string,
    @Param('id', ParseIntPipe) id: number
  ): Promise<Goalies_Stats_V2> {
    return this.goalieStatsService.deleteGoalie(id, season);
  }

  @Get('/leaders/:season/:seasonType/:minGames')
  async getGoalieStatsLeaders(
    @Param('season') season: string,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs',
    @Param('minGames') minGames: string
  ): Promise<StatGoalieLeadersDto> {
    const stats = await this.goalieStatsLeadersService.getGoalieStatsLeaders(
      season,
      seasonType,
      minGames
    );

    if (!stats) {
      throw new NotFoundException('Goalie leader stats not found');
    }
    return stats;
  }

  @Get('/all/:season/:seasonType')
  async getAllGoalieStats(
    @Param('season') season: string,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatGoalieAllDto[]> {
    const stats = await this.goalieStatsService.getAllGoalieStats(
      season,
      seasonType
    );

    if (!stats || stats.length === 0) {
      throw new NotFoundException('Goalie stats not found');
    }
    return stats;
  }

  @Get('/current/:season/:seasonType/:playerId')
  async getGoalieStatsByPlayerId(
    @Param('season') season: string,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs',
    @Param('playerId', ParseIntPipe) playerId: number
  ): Promise<StatGoalieAllDto[]> {
    const stats = await this.goalieStatsService.getGoalieStatsByPlayerId(
      season,
      seasonType,
      playerId
    );

    if (!stats || stats.length === 0) {
      throw new NotFoundException(
        `Goalie stats not found for player ID ${playerId}`
      );
    }
    return stats;
  }

  @Get('/history/season/:seasonType')
  async getAllTimePlayerStatsBySeasonByType(
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatGoaliesHistoryDto[]> {
    const stats =
      await this.goalieAllTimeStatsService.getAllTimeGoalieStatsBySeasonByType(
        seasonType
      );

    if (!stats || stats.length === 0) {
      throw new NotFoundException('Goalie history stats not found');
    }
    return stats;
  }

  @Get('/history/all-time/:seasonType')
  async getAllTimeGoalieStatsSummedBySeasonByType(
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatGoaliesHistoryDto[]> {
    const stats =
      await this.goalieAllTimeStatsService.getAllTimeGoalieStatsSummedBySeasonByType(
        seasonType
      );

    if (!stats || stats.length === 0) {
      throw new NotFoundException('Goalie summed history stats not found');
    }
    return stats;
  }

  @Get('/user/:userId/history/:seasonType')
  async getTeamGoaliesStatsBySeasonType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserGoaliesHistoryDto[]> {
    const record =
      await this.userGoalieStatsService.getUserGoaliesStatsBySeasonType(
        userId,
        seasonType
      );

    if (!record || record.length === 0) {
      throw new NotFoundException('Team goalies stats not found');
    }

    // Resolves TypeORM Divisions_V2.id (number) vs StatUserGoaliesHistoryDto literal ID (5)
    return record as unknown as StatUserGoaliesHistoryDto[];
  }

  @Get('/user/:userId/history/all/:seasonType')
  async getTeamGoaliesStatsAllTimeBySeasonType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserGoaliesHistoryDto[]> {
    const record =
      await this.userGoalieStatsService.getUserGoaliesStatsAllTimeBySeasonType(
        userId,
        seasonType
      );

    if (!record || record.length === 0) {
      throw new NotFoundException('Team goalies all-time stats not found');
    }

    // Resolves TypeORM Divisions_V2.id (number) vs StatUserGoaliesHistoryDto literal ID (5)
    return record as unknown as StatUserGoaliesHistoryDto[];
  }

  @Get('/team/:teamName/:season')
  async getTeamPlayersByTeamName(
    @Param('teamName') teamName: string,
    @Param('season') season: string
  ): Promise<StatPlayerAwardDto[]> {
    const record = await this.userGoalieStatsService.getTeamPlayersByTeamName(
      teamName,
      season
    );

    if (!record || record.length === 0) {
      throw new NotFoundException(
        `Team goalies not found for team ${teamName}`
      );
    }

    return record as unknown as StatPlayerAwardDto[];
  }
}
