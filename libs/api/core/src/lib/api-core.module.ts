import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiAwardsModule } from '@api/awards';
import { ApiUsersModule } from '@api/users';
import { ApiDraftTableModule } from '@api/draft-table';
import { ApiEntryDraftModule } from '@api/entry-draft';
import { ApiGoalieStatsModule } from '@api/goalie-stats';
import { ApiLeagueModule } from '@api/league';
import { ApiNhlModule } from '@api/nhl';
import { ApiPlayerInfoModule } from '@api/player-info';
import { ApiPlayerRatingsModule } from '@api/player-ratings';
import { ApiPlayerStatsModule } from '@api/player-stats';
import { ApiSalariesModule } from '@api/salaries';
import { ApiScheduleModule } from '@api/schedule';
import { ApiTeamStatsModule } from '@api/team-stats';
import { ApiTeamsModule } from '@api/teams';
import { ApiTransactionsModule } from '@api/transactions';
import { ApiWaiversModule } from '@api/waivers';

import { User } from '@api/users';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: false,
      entities: [User],
    }),
    ApiUsersModule,
    ApiAwardsModule,
    ApiDraftTableModule,
    ApiEntryDraftModule,
    ApiGoalieStatsModule,
    ApiLeagueModule,
    ApiNhlModule,
    ApiPlayerInfoModule,
    ApiPlayerRatingsModule,
    ApiPlayerStatsModule,
    ApiSalariesModule,
    ApiScheduleModule,
    ApiTeamStatsModule,
    ApiTeamsModule,
    ApiTransactionsModule,
    ApiWaiversModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
