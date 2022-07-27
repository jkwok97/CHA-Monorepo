import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('player-info')
export class PlayerInfoController {
  @Get()
  getAllPlayers() {}

  @Get('/players/:id')
  getPlayerInfoById(@Param('id') id: string) {}

  @Get('/goalies/:id')
  getGoalieInfoById(@Param('id') id: string) {}

  @Get('/players/nhl/logo/:id')
  getPlayerLogoByNhlId(@Param('id') id: string) {}

  @Get('/goalies/nhl/logo/:id')
  getGoalieLogoByNhlId(@Param('id') id: string) {}

  @Get('/players/active')
  getActivePlayers() {}

  @Get('/player/:id')
  getPlayerForEditById(@Param('id') id: string) {}

  @Put('/player/:id')
  updatePlayerById(@Body() body: any, @Param('id') id: string) {}

  @Post('/players/add')
  addPlayer(@Body() body: any) {}

  @Delete('/delete/:id')
  deletePlayer(@Body() body: any, @Param('id') id: string) {}
}
