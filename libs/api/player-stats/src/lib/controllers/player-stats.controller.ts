import { Players_Stats_V2 } from '@api/entities';
import {
  StatPlayerAllDto,
  StatPlayerAwardDto,
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
  ParseIntPipe,
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
    private readonly playerLeaderStatsService: ApiPlayerLeadersStatsService,
    private readonly playerStatsService: ApiPlayerStatsService,
    private readonly playerAllTimeStatsService: ApiPlayerAllTimeStatsService,
    private readonly userPlayersStatsService: ApiUserPlayerStatsService
  ) {}

  @Get('/:season')
  async getAllPlayers(
    @Param('season') season: string
  ): Promise<StatPlayerAllDto[]> {
    const players = await this.playerStatsService.getAll(season);

    if (!players || players.length === 0) {
      throw new NotFoundException(`No players found for season ${season}`);
    }
    return players;
  }

  @Put('/:season/:id')
  async updatePlayerById(
    @Param('season') season: string,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Players_Stats_V2>
  ): Promise<Players_Stats_V2> {
    return this.playerStatsService.updatePlayerById(id, season, body);
  }

  @Delete('/:season/:id')
  async deletePlayer(
    @Param('season') season: string,
    @Param('id', ParseIntPipe) id: number
  ): Promise<Players_Stats_V2> {
    return this.playerStatsService.deletePlayer(id, season);
  }

  @Get('/leaders/:season/:seasonType/:minGamesStats')
  async getPlayerStatsLeaders(
    @Param('season') season: string,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs',
    @Param('minGamesStats', ParseIntPipe) minGamesStats: number
  ): Promise<StatPlayerLeadersDto> {
    const stats = await this.playerLeaderStatsService.getPlayerStatsLeaders(
      season,
      seasonType,
      minGamesStats
    );

    if (!stats) {
      throw new NotFoundException('Player Leader Stats not found');
    }
    return stats;
  }

  @Get('/all/:season/:seasonType')
  async getPlayerStatsAll(
    @Param('season') season: string,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayerAllDto[]> {
    const stats = await this.playerStatsService.getAllStats(season, seasonType);

    if (!stats || stats.length === 0) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  @Get('/current/:season/:seasonType/:playerId')
  async getPlayerStatsByPlayerId(
    @Param('season') season: string,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs',
    @Param('playerId', ParseIntPipe) playerId: number
  ): Promise<StatPlayerAllDto[]> {
    const stats = await this.playerStatsService.getPlayerStatsByPlayerId(
      season,
      seasonType,
      playerId
    );

    if (!stats || stats.length === 0) {
      throw new NotFoundException(
        `Player stats not found for player ID ${playerId}`
      );
    }
    return stats;
  }

  @Get('/history/season/:seasonType')
  async getAllTimePlayerStatsBySeasonByType(
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayersHistoryDto[]> {
    const stats =
      await this.playerAllTimeStatsService.getAllTimePlayerStatsBySeasonByType(
        seasonType
      );

    if (!stats || stats.length === 0) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  @Get('/history/all-time/:seasonType')
  async getAllTimePlayerStatsSummedBySeasonByType(
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayersHistoryDto[]> {
    const stats =
      await this.playerAllTimeStatsService.getAllTimePlayerStatsSummedBySeasonByType(
        seasonType
      );

    if (!stats || stats.length === 0) {
      throw new NotFoundException('Player Stats not found');
    }
    return stats;
  }

  @Get('/user/:userId/history/:seasonType')
  async getTeamPlayerStatsBySeasonType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserPlayersHistoryDto[]> {
    const record =
      await this.userPlayersStatsService.getUserPlayerStatsBySeasonType(
        userId,
        seasonType
      );

    if (!record || record.length === 0) {
      throw new NotFoundException('Team Players Stats not found');
    }

    // Cast via unknown to resolve strict entity-to-DTO literal mismatches (e.g., divisions_id.id: number vs literal)
    return record as unknown as StatUserPlayersHistoryDto[];
  }

  @Get('/user/:userId/history/all/:seasonType')
  async getTeamPlayerStatsAllTimeBySeasonType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('seasonType') seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserPlayersHistoryDto[]> {
    const record =
      await this.userPlayersStatsService.getUserPlayerStatsAllTimeBySeasonType(
        userId,
        seasonType
      );

    if (!record || record.length === 0) {
      throw new NotFoundException('Team Players Stats not found');
    }

    return record as unknown as StatUserPlayersHistoryDto[];
  }

  @Get('/team/:teamName/:season')
  async getTeamPlayersByTeamName(
    @Param('teamName') teamName: string,
    @Param('season') season: string
  ): Promise<StatPlayerAwardDto[]> {
    const record = await this.userPlayersStatsService.getTeamPlayersByTeamName(
      teamName,
      season
    );

    if (!record || record.length === 0) {
      throw new NotFoundException(
        `Team players not found for team ${teamName}`
      );
    }

    return record as unknown as StatPlayerAwardDto[];
  }
}
