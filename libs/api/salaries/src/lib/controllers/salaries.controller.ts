import { SalaryAllDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiSalariesService } from '../services';

@Controller('salaries')
export class SalariesController {
  constructor(private salariesService: ApiSalariesService) {}

  @Get()
  async getSalaries(): Promise<SalaryAllDto[]> {
    const salaries = await this.salariesService.getAll();

    if (!salaries || salaries.length < 1) {
      throw new NotFoundException('salaries not found');
    }
    return salaries;
  }

  @Put('/:id')
  updateUserById(@Param() param, @Body() body): Promise<SalaryAllDto> {
    return this.salariesService.updateSalaryById(parseInt(param.id), body);
  }

  @Post('/add')
  addUser(@Body() body: SalaryAllDto) {
    return this.salariesService.addSalary(body);
  }

  @Get('/all/players/:season')
  async getAllPlayerSalaries(@Param() param): Promise<any[]> {
    const salaries = await this.salariesService.getAllPlayerSalaries(
      param.season
    );

    if (!salaries) {
      throw new NotFoundException('Player Salaries not found');
    }
    return salaries;
  }

  @Get('/all/goalies/:season')
  async getAllGoaliesSalaries(@Param() param): Promise<any[]> {
    const salaries = await this.salariesService.getAllGoaliesSalaries(
      param.season
    );

    if (!salaries) {
      throw new NotFoundException('Goalie Salaries not found');
    }
    return salaries;
  }

  @Get('/user/:teamName/players/:season/:ratingsSeason')
  async getUserTeamPlayerSalaries(@Param() param): Promise<any[]> {
    const salaries = await this.salariesService.getUserTeamPlayerSalaries(
      param.teamName,
      param.season,
      param.ratingsSeason
    );

    if (!salaries) {
      throw new NotFoundException('User Player Salaries not found');
    }
    return salaries;
  }

  @Get('/user/:teamName/goalies/:season/:ratingsSeason')
  async getUserTeamGoaliesSalaries(@Param() param): Promise<any[]> {
    const salaries = await this.salariesService.getUserTeamGoaliesSalaries(
      param.teamName,
      param.season,
      param.ratingsSeason
    );

    if (!salaries) {
      throw new NotFoundException('User Goalie Salaries not found');
    }
    return salaries;
  }
}
