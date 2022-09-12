import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiSalariesService } from '../services';

@Controller('salaries')
export class SalariesController {
  constructor(private salariesService: ApiSalariesService) {}

  @Get('/all/players/:season')
  async getAllPlayerSalaries(@Param() param): Promise<any[]> {
    const salaries = await this.salariesService.getAllPlayerSalaries(param.season);

    if (!salaries) {
      throw new NotFoundException('Player Salaries not found');
    }
    return salaries;
  }

  @Get('/all/goalies/:season')
  async getAllGoaliesSalaries(@Param() param): Promise<any[]> {
    const salaries = await this.salariesService.getAllGoaliesSalaries(param.season);

    if (!salaries) {
      throw new NotFoundException('Goalie Salaries not found');
    }
    return salaries;
  }
}
