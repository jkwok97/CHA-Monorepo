import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';

@Module({
  providers: [LeagueService],
  exports: [LeagueService],
})
export class LeagueModule {}
