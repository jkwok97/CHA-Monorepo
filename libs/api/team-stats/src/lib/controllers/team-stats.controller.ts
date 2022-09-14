import { Team_Stats_V2 } from '@api/entities';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiAllTimeTeamStatsService, ApiTeamStatsService } from '../services';

@Controller('team-stats')
export class TeamStatsController {
  constructor(
    private teamsStatsService: ApiTeamStatsService,
    private allTimeTeamsStatsService: ApiAllTimeTeamStatsService
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
}
