import { Module } from '@nestjs/common';
import { PlayerStatsService } from './player-stats.service';

@Module({
  providers: [PlayerStatsService],
  exports: [PlayerStatsService],
})
export class PlayerStatsModule {}
