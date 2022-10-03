import { TeamCreateDto, TeamDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DivisionDto } from 'libs/cha/shared/entities/src/lib/dtos/league/division.dto';
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

  @Get('/:teamId')
  async getUserByTeamId(@Param() param): Promise<{ user }> {
    const user = await this.teamsService.getUserByTeamId(param.teamId);

    if (!user) {
      throw new NotFoundException('No User Found');
    }
    return user;
  }

  @Get()
  async getTeams(): Promise<TeamDto[]> {
    const teams = await this.teamsService.getAll();

    if (!teams || teams.length < 1) {
      throw new NotFoundException('teams not found');
    }
    return teams;
  }

  @Get('/divisions')
  async getDivisions(): Promise<DivisionDto[]> {
    const divisions = await this.teamsService.getDivisions();

    if (!divisions || divisions.length < 1) {
      throw new NotFoundException('divisions not found');
    }
    return divisions;
  }

  @Put('/:id')
  updateTeamById(@Param() param, @Body() body): Promise<TeamDto> {
    return this.teamsService.updateTeamById(parseInt(param.id), body);
  }

  @Post('/add')
  addUser(@Body() body: TeamCreateDto) {
    return this.teamsService.addTeam(body);
  }

  @Delete('/delete/:id')
  deleteUserById(@Param() param) {
    return this.teamsService.deleteTeam(parseInt(param.id));
  }
}
