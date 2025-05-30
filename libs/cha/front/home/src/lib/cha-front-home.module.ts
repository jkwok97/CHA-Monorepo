import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { ChaFrontHomeRoutingModule } from './cha-front-home-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './+state/home.reducer';
import { HomeEffects } from './+state/home.effects';
import { HomeFacade } from './+state/home.facade';

import { HomeService } from './services';

import { HomeComponent } from './containers';

import {
  HomeTeamBannerComponent,
  HomeTeamCapComponent,
  HomeTeamRecordComponent,
} from './components';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeRoutingModule,
    BladeAngularUiCardModule,
    StoreModule.forFeature('home', reducer),
    EffectsModule.forFeature([HomeEffects]),
    BladeAngularUiLayoutModule,
    ProgressBarModule,
  ],
  declarations: [
    HomeComponent,
    HomeTeamRecordComponent,
    HomeTeamCapComponent,
    HomeTeamBannerComponent,
  ],
  providers: [HomeService, HomeFacade],
})
export class ChaFrontHomeModule {}
