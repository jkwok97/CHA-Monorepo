import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CarouselModule } from 'primeng/carousel';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { TeamsSummaryEffects } from './+state/teams-summary.effects';
import { TeamsSummaryFacade } from './+state/teams-summary.facade';
import { reducer } from './+state/teams-summary.reducer';
import { TeamsSummaryFranchiseService } from './services';

import { ChaFrontTeamsSummaryRoutingModule } from './cha-front-teams-summary-routing.module';

import {
  TeamsSummaryComponent,
  TeamsSummaryDepthComponent,
  TeamsSummaryTeamComponent,
  TeamsSummaryPlayersComponent,
  TeamsSummaryGoaliesComponent,
  TeamsSummaryAwardsComponent,
} from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontTeamsSummaryRoutingModule,
    PerfectScrollbarModule,
    CarouselModule,
    BladeAngularUiLayoutModule,

    StoreModule.forFeature('teams-summary', reducer),
    EffectsModule.forFeature([TeamsSummaryEffects]),
  ],
  declarations: [
    TeamsSummaryComponent,
    TeamsSummaryDepthComponent,
    TeamsSummaryTeamComponent,
    TeamsSummaryPlayersComponent,
    TeamsSummaryGoaliesComponent,
    TeamsSummaryAwardsComponent,
  ],
  providers: [
    TeamsSummaryFranchiseService,
    TeamsSummaryFacade,
    TeamsSummaryEffects,
  ],
})
export class ChaFrontTeamsSummaryModule {}
