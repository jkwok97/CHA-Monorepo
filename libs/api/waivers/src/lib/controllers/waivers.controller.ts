import { Waivers_V2 } from '@api/entities';
import { WaiversDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
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

  @Put('/:id')
  updateUserById(@Param() param, @Body() body): Promise<WaiversDto> {
    return this.waiversService.updateWaiverPriority(parseInt(param.id), body);
  }
}
