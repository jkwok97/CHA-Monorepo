import { Module } from '@nestjs/common';
import { PlayerStatsController } from './controllers';

@Module({
  controllers: [PlayerStatsController],
  providers: [],
  exports: [],
})
export class ApiPlayerStatsModule {}
