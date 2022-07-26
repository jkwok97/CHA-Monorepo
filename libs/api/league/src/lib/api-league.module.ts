import { Module } from '@nestjs/common';
import { LeagueController } from './controllers';

@Module({
  controllers: [LeagueController],
  providers: [],
  exports: [],
})
export class ApiLeagueModule {}
