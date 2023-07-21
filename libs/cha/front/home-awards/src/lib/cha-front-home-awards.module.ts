import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeUserAwardCardComponent } from '@blade/angular/ui/award-card';

import { HomeAwardsEffects } from './+state/home-awards.effects';
import { HomeAwardsFacade } from './+state/home-awards.facade';
import { reducer } from './+state/home-awards.reducer';
import { HomeAwardsService } from './services';

import { ChaFrontHomeAwardsRoutingModule } from './cha-front-home-awards-routing.module';

import { HomeAwardsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeAwardsRoutingModule,

    NgScrollbarModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    BladeUserAwardCardComponent,
    StoreModule.forFeature('home-awards', reducer),
    EffectsModule.forFeature([HomeAwardsEffects]),
  ],
  declarations: [HomeAwardsComponent],
  providers: [HomeAwardsService, HomeAwardsFacade, HomeAwardsEffects],
})
export class ChaFrontHomeAwardsModule {}
