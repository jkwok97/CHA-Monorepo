import { Controller, Get } from '@nestjs/common';

@Controller('league')
export class LeagueController {
  @Get('/divisions')
  getDivisions() {}

  @Get('/current-data')
  getCurrentData() {}
}
