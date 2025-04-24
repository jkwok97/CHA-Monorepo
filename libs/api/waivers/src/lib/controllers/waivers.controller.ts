import { Waivers_V2 } from '@api/entities';
import { WaiversDto } from '@cha/shared/entities';
import { Body, Controller, Get, NotFoundException, Put } from '@nestjs/common';
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

  @Put()
  updateWaiverById(@Body() body): Promise<void> {
    return this.waiversService.updateWaiverPriority(body);
  }
}
