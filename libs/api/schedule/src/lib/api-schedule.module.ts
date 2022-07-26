import { Module } from '@nestjs/common';
import { ScheduleController } from './controllers';

@Module({
  controllers: [ScheduleController],
  providers: [],
  exports: [],
})
export class ApiScheduleModule {}
