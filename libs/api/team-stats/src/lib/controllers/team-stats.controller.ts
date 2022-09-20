import { Team_Stats_V2 } from '@api/entities';
import {
  StatTeamsHistoryDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import {
  ApiAllTimeTeamStatsService,
  ApiTeamStatsService,
  ApiUserTeamStatsService,
} from '../services';

@Controller('team-stats')
export class TeamStatsController {
  constructor(
    private teamsStatsService: ApiTeamStatsService,
    private allTimeTeamsStatsService: ApiAllTimeTeamStatsService,
    private userTeamStatsService: ApiUserTeamStatsService
  ) {}

  @Get('/:season/:seasonType')
  async getTeamStatsBySeasonByType(@Param() param): Promise<Team_Stats_V2[]> {
    const stats = await this.teamsStatsService.getTeamStatsBySeasonByType(
      param.season,
      param.seasonType
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Team Stats not found');
    }
    return stats;
  }

  @Get('/all/:season/:seasonType')
  async getAllTeamStatsBySeasonByType(
    @Param() param
  ): Promise<Team_Stats_V2[]> {
    const stats = await this.teamsStatsService.getAllTeamStatsBySeasonByType(
      param.season,
      param.seasonType
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Team Stats not found');
    }
    return stats;
  }

  @Get('/playoffs/:season/:seasonType')
  async getTeamStandingsForPlayoffs(@Param() param): Promise<Team_Stats_V2[]> {
    const stats = await this.teamsStatsService.getTeamStandingsForPlayoffs(
      param.season,
      param.seasonType
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Team Stats not found');
    }
    return stats;
  }

  @Get('/history/season/:seasonType')
  async getAllTimeTeamStatsBySeasonByType(
    @Param() param
  ): Promise<StatTeamsHistoryDto[]> {
    const stats =
      await this.allTimeTeamsStatsService.getAllTimeTeamStatsBySeasonByType(
        param.seasonType
      );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Team Stats not found');
    }
    return stats;
  }

  @Get('/history/all-time/:seasonType')
  async getAllTimeTeamStatsSummedBySeasonByType(
    @Param() param
  ): Promise<StatTeamsHistoryDto[]> {
    const stats =
      await this.allTimeTeamsStatsService.getAllTimeTeamStatsSummedBySeasonByType(
        param.seasonType
      );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Team Stats not found');
    }
    return stats;
  }

  @Get('/user/:teamId/record/:season/:seasonType/')
  async getUserTeamRecordBySeasonBySeasonType(
    @Param() param
  ): Promise<StatUserTeamRecordDto> {
    const record =
      await this.userTeamStatsService.getUserTeamRecordBySeasonBySeasonType(
        param.teamId,
        param.season,
        param.seasonType
      );

    if (!record) {
      throw new NotFoundException('User Team Stats not found');
    }
    return record;
  }

  @Get('/user/:userId/history/:seasonType')
  async getUserTeamStatsBySeasonType(
    @Param() param
  ): Promise<StatUserTeamRecordDto> {
    const record =
      await this.userTeamStatsService.getUserTeamStatsBySeasonType(
        param.userId,
        param.seasonType
      );

    if (!record) {
      throw new NotFoundException('User Team Stats not found');
    }
    return record;
  }
}
