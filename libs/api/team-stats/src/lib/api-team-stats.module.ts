import { Module } from '@nestjs/common';
import { TeamStatsController } from './controllers';

@Module({
  controllers: [TeamStatsController],
  providers: [],
  exports: [],
})
export class ApiTeamStatsModule {}
