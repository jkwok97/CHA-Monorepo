import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('player-info')
export class PlayerInfoController {
  @Get()
  getAllPlayers() {}

  @Get('/players/:id')
  getPlayerInfoById() {}

  @Get('/goalies/:id')
  getGoalieInfoById() {}

  @Get('/players/nhl/logo/:id')
  getPlayerLogoByNhlId() {}

  @Get('/goalies/nhl/logo/:id')
  getGoalieLogoByNhlId() {}

  @Get('/players/active')
  getActivePlayers() {}

  @Get('/player/:id')
  getPlayerForEditById() {}

  @Put('/player/:id')
  updatePlayerById() {}

  @Post('/players/add')
  addPlayer() {}

  @Delete('/delete/:id')
  deletePlayer() {}
}
