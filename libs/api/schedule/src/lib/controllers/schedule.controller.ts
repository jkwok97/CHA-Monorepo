import { Schedule_V2 } from '@api/entities';
import { ScheduleAllDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { ApiScheduleService } from '../services';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ApiScheduleService) {}

  @Get('/:season')
  async getCompleteScheduleBySeason(@Param() param): Promise<ScheduleAllDto[]> {
    const stats = await this.scheduleService.getCompleteScheduleBySeason(
      param.season
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Leader Stats not found');
    }
    return stats;
  }

  @Get('/next/:season/:currentDay')
  async getNextDays(@Param() param): Promise<any[]> {
    const stats = await this.scheduleService.getNextDays(
      param.season,
      Number(param.currentDay)
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Player Leader Stats not found');
    }
    return stats;
  }

  @Put('/:id')
  updateGameById(@Param() param, @Body() body): Promise<Schedule_V2> {
    return this.scheduleService.updateGameById(parseInt(param.id), body);
  }
}
