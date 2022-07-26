import { Module } from '@nestjs/common';
import { GoalieStatsService } from './goalie-stats.service';

@Module({
  providers: [GoalieStatsService],
  exports: [GoalieStatsService],
})
export class GoalieStatsModule {}
