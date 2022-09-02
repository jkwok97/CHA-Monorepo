import { ScheduleAllDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
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
}
