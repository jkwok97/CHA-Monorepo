import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CarouselModule } from 'primeng/carousel';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { reducer } from './+state/index';
import { TeamsSummaryEffects } from './+state/summary/teams-summary.effects';
import { TeamsSummaryFacade } from './+state/summary/teams-summary.facade';
import { TeamStatsEffects } from './+state/team-stats/team-stats.effects';
import { TeamStatsFacade } from './+state/team-stats/team-stats.facade';
import { PlayerStatsEffects } from './+state/player-stats/player-stats.effects';
import { PlayerStatsFacade } from './+state/player-stats/player-stats.facade';
import { AwardsEffects } from './+state/awards/awards.effects';
import { AwardsFacade } from './+state/awards/awards.facade';
import { GoalieStatsEffects } from './+state/goalie-stats/goalie-stats.effects';
import { GoalieStatsFacade } from './+state/goalie-stats/goalie-stats.facade';
import {
  TeamsSummaryAwardsService,
  TeamsSummaryGoalieStatsService,
  TeamsSummaryPlayerStatsService,
  TeamsSummaryService,
  TeamsSummaryTeamStatsService,
} from './services';

import { ChaFrontTeamsSummaryRoutingModule } from './cha-front-teams-summary-routing.module';

import {
  TeamsSummaryComponent,
  TeamsSummaryDepthComponent,
  TeamsSummaryTeamComponent,
  TeamsSummaryPlayersComponent,
  TeamsSummaryGoaliesComponent,
  TeamsSummaryAwardsComponent,
} from './containers';

import {
  SummaryTeamBannerComponent,
  SummaryTeamBannerCapComponent,
  SummaryTeamBannerRecordComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontTeamsSummaryRoutingModule,
    PerfectScrollbarModule,
    CarouselModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,

    StoreModule.forFeature('teams-summary', reducer),
    EffectsModule.forFeature([
      TeamsSummaryEffects,
      TeamStatsEffects,
      PlayerStatsEffects,
      GoalieStatsEffects,
      AwardsEffects,
    ]),
  ],
  declarations: [
    TeamsSummaryComponent,
    TeamsSummaryDepthComponent,
    TeamsSummaryTeamComponent,
    TeamsSummaryPlayersComponent,
    TeamsSummaryGoaliesComponent,
    TeamsSummaryAwardsComponent,
    SummaryTeamBannerComponent,
    SummaryTeamBannerCapComponent,
    SummaryTeamBannerRecordComponent,
  ],
  providers: [
    TeamsSummaryService,
    TeamsSummaryAwardsService,
    TeamsSummaryGoalieStatsService,
    TeamsSummaryPlayerStatsService,
    TeamsSummaryTeamStatsService,
    TeamsSummaryFacade,
    TeamsSummaryEffects,
    TeamStatsFacade,
    TeamStatsEffects,
    PlayerStatsFacade,
    PlayerStatsEffects,
    GoalieStatsFacade,
    GoalieStatsEffects,
    AwardsFacade,
    AwardsEffects,
  ],
})
export class ChaFrontTeamsSummaryModule {}
