import { Module } from '@nestjs/common';

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
import { ApiDivisionsModule } from '@api/divisions';
import { ApiGoalieRatingsModule } from '@api/goalie-ratings';
import { ApiConferencesModule } from '@api/conferences';

@Module({
  imports: [
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
    ApiDivisionsModule,
    ApiGoalieRatingsModule,
    ApiConferencesModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
