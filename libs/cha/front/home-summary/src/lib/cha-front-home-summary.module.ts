import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { ChaFrontHomeRoutingModule } from './cha-front-home-summary-routing.module';

import { HomeSummaryComponent } from './containers';
import {
  HomeSummaryTeamBannerComponent,
  HomeSummaryDepthChartComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
  ],
  declarations: [
    HomeSummaryComponent,
    HomeSummaryTeamBannerComponent,
    HomeSummaryDepthChartComponent,
  ],
})
export class ChaFrontHomeSummaryModule {}
