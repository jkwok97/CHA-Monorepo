import { TeamDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TeamsService } from '../services';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get('/user/:id')
  async getUserTeams(@Param() param): Promise<TeamDto[]> {
    const teams = await this.teamsService.getUserTeams(parseInt(param.id));

    if (!teams || teams.length < 1) {
      throw new NotFoundException('User Teams not found');
    }
    return teams;
  }

  @Get('/current')
  async getCurrentTeams(): Promise<TeamDto[]> {
    const teams = await this.teamsService.getCurrentTeams();

    if (!teams || teams.length < 1) {
      throw new NotFoundException('No Current Teams found');
    }
    return teams;
  }
}
