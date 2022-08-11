import { LeagueDataDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { LeagueService } from '../services';

@Controller('league')
export class LeagueController {
  constructor(private leagueService: LeagueService) {}

  @Get('/current-data')
  async getCurrentData(): Promise<LeagueDataDto> {
    const data = await this.leagueService.getCurrentLeagueData();

    if (!data) {
      throw new NotFoundException('League Data not found');
    }
    return data;
  }
}
