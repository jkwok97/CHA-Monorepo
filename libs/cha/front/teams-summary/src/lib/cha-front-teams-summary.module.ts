import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CarouselModule } from 'primeng/carousel';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

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
  ],
  declarations: [
    TeamsSummaryComponent,
    TeamsSummaryDepthComponent,
    TeamsSummaryTeamComponent,
    TeamsSummaryPlayersComponent,
    TeamsSummaryGoaliesComponent,
    TeamsSummaryAwardsComponent,
  ],
})
export class ChaFrontTeamsSummaryModule {}
