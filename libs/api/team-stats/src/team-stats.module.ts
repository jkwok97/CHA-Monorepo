import { Module } from '@nestjs/common';
import { TeamStatsService } from './team-stats.service';

@Module({
  providers: [TeamStatsService],
  exports: [TeamStatsService],
})
export class TeamStatsModule {}
