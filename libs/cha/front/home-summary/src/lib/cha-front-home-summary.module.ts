import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { HomeSummaryEffects } from './+state/home-summary.effects';
import { HomeSummaryFacade } from './+state/home-summary.facade';
import { reducer } from './+state/home-summary.reducer';
import { HomeSummaryService } from './services';

import { ChaFrontHomeRoutingModule } from './cha-front-home-summary-routing.module';

import { HomeSummaryComponent } from './containers';
import {
  HomeSummaryTeamBannerComponent,
  HomeSummaryDepthChartComponent,
  HomeSummaryTeamRecordComponent,
  HomeSummaryTeamCapComponent,
  HomeSummaryDepthChartPositionComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeRoutingModule,
    ProgressBarModule,
    AvatarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    PerfectScrollbarModule,

    StoreModule.forFeature('home-summary', reducer),
    EffectsModule.forFeature([HomeSummaryEffects]),
  ],
  declarations: [
    HomeSummaryComponent,
    HomeSummaryTeamBannerComponent,
    HomeSummaryDepthChartComponent,
    HomeSummaryTeamRecordComponent,
    HomeSummaryTeamCapComponent,
    HomeSummaryDepthChartPositionComponent,
  ],
  providers: [HomeSummaryService, HomeSummaryFacade, HomeSummaryEffects],
})
export class ChaFrontHomeSummaryModule {}
