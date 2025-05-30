import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';

import { ChaFrontHomeRoutingModule } from './cha-front-home-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './+state/home.reducer';
import { HomeEffects } from './+state/home.effects';
import { HomeFacade } from './+state/home.facade';

import { HomeService } from './services';

import { HomeComponent } from './containers';

import {
  HomeDashboardComponent,
  HomeDashboardTradesCardComponent,
  HomeDashboardTradesComponent,
  HomeTeamBannerComponent,
  HomeTeamCapComponent,
  HomeTeamRecordComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeRoutingModule,
    BladeAngularUiCardModule,
    StoreModule.forFeature('home', reducer),
    EffectsModule.forFeature([HomeEffects]),
    BladeAngularUiLayoutModule,
    ProgressBarModule,
    AvatarModule,
  ],
  declarations: [
    HomeComponent,
    HomeTeamRecordComponent,
    HomeTeamCapComponent,
    HomeTeamBannerComponent,
    HomeDashboardComponent,
    HomeDashboardTradesComponent,
    HomeDashboardTradesCardComponent,
  ],
  providers: [HomeService, HomeFacade],
})
export class ChaFrontHomeModule {}
