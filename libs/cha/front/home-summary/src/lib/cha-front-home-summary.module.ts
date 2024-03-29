import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FieldsetModule } from 'primeng/fieldset';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeListComponent } from '@blade/angular/ui/list';

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
  HomeSummaryDepthChartItemSidebarComponent,
  HomeSummaryDepthChartItemSidebarRatingsComponent,
  HomeSummarySalariesComponent,
  HomeSummaryDepthChartItemSidebarStatChaComponent,
  HomeSummaryDepthChartItemSidebarStatNhlComponent,
  HomeSummaryDepthChartItemSidebarRatingsNhlComponent,
  HomeSummaryDepthChartItemSidebarRatingsRateComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChaFrontHomeRoutingModule,
    ProgressBarModule,
    AvatarModule,
    SidebarModule,
    ButtonModule,
    CarouselModule,
    DropdownModule,
    FieldsetModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    BladeListComponent,
    NgScrollbarModule,

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
    HomeSummaryDepthChartItemSidebarComponent,
    HomeSummaryDepthChartItemSidebarRatingsComponent,
    HomeSummarySalariesComponent,
    HomeSummaryDepthChartItemSidebarStatChaComponent,
    HomeSummaryDepthChartItemSidebarStatNhlComponent,
    HomeSummaryDepthChartItemSidebarRatingsNhlComponent,
    HomeSummaryDepthChartItemSidebarRatingsRateComponent,
  ],
  providers: [HomeSummaryService, HomeSummaryFacade, HomeSummaryEffects],
})
export class ChaFrontHomeSummaryModule {}
