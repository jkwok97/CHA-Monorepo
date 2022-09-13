import { Waivers_V2 } from '@api/entities';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiWaiversService } from '../services';

@Controller('waivers')
export class WaiversController {
  constructor(private waiversService: ApiWaiversService) {}

  @Get('/all')
  async getAllPlayerSalaries(): Promise<Waivers_V2[]> {
    const salaries = await this.waiversService.getWaiverPriority();

    if (!salaries) {
      throw new NotFoundException('Waivers not found');
    }
    return salaries;
  }
}
