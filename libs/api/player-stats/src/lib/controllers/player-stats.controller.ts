import { Controller, Get, Param } from '@nestjs/common';

@Controller('player-stats')
export class PlayerStatsController {
  @Get()
  getPlayerStats() {}

  @Get('/:id')
  getPlayerStatsById(@Param('id') id: string) {}

  @Get('/active/team/:id')
  getActivePlayerStatsByTeamId(@Param('id') id: string) {}

  @Get('/player/:id')
  getPlayerStatsByPlayerId(@Param('id') id: string) {}

  @Get('/season/current')
  getPlayerStatsByCurrentSeasonBySeasonType() {}

  @Get('/season/current/:playerType')
  getPlayerStatsByCurrentSeasonByPlayerType(
    @Param('playerType') playerType: string
  ) {}
}
