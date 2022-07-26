import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('awards')
export class AwardsController {
  @Get()
  getAllAwardWinners() {}

  @Get('/winners/:id')
  getAwardWinnersById() {}

  @Get('/champions')
  getChampions() {}

  @Get('/scorers')
  getScorers() {}

  @Get('/defense')
  getDefense() {}

  @Get('/rookies')
  getRookies() {}

  @Get('/goalies')
  getGoalies() {}

  @Get('/gm')
  getGm() {}

  @Get('/season')
  getSeason() {}

  @Get('/player/:id')
  getPlayerAwardsByPlayerId() {}

  @Get('/goalie/:id')
  getGoalieAwardsByPlayerId() {}

  @Get('/user/:id')
  getTeamAwardsByUserId() {}

  @Get('/award-types')
  getAwardTypes() {}

  @Post('/add')
  addAwardWinner() {}

  @Put('/winners/:id')
  editAwardWinnerById() {}

  @Delete('/winners/:id')
  deleteAwardWinnerById() {}
}
