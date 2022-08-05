import { TeamDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { TeamsService } from '../services';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get('/user/:id')
  async getUserTeams(): Promise<TeamDto[]> {
    const teams = await this.teamsService.getUserTeams();

    if (!teams || teams.length < 1) {
      throw new NotFoundException('User Teams not found');
    }
    return teams;
  }
}
