import { Module } from '@nestjs/common';
import { GoalieStatsController } from './controllers';

@Module({
  controllers: [GoalieStatsController],
  providers: [],
  exports: [],
})
export class ApiGoalieStatsModule {}
