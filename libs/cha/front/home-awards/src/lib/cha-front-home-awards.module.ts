import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
    StoreModule.forFeature('home-awards', reducer),
    EffectsModule.forFeature([HomeAwardsEffects]),
  ],
  declarations: [HomeAwardsComponent],
  providers: [HomeAwardsService, HomeAwardsFacade, HomeAwardsEffects],
})
export class ChaFrontHomeAwardsModule {}
