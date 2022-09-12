import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiSalariesService } from '../services';

@Controller('salaries')
export class SalariesController {
  constructor(private salariesService: ApiSalariesService) {}

  @Get('/all/:season')
  async getPlayerStatsLeaders(@Param() param): Promise<any[]> {
    const salaries = await this.salariesService.getAllSalaries(param.season);

    if (!salaries) {
      throw new NotFoundException('Salaries not found');
    }
    return salaries;
  }
}
