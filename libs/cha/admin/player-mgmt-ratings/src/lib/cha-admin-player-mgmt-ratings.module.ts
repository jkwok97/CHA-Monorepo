import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PlayerMgmtRatingsFacade } from './+state/player-mgmt-ratings.facade';
import { reducer } from './+state/player-mgmt-ratings.reducer';
import { PlayerMgmtRatingsEffects } from './+state/player-mgmt-ratings.effects';

import { ChaAdminPlayerMgmtRatingsRoutingModule } from './cha-admin-player-mgmt-ratings-routing.module';

import { PlayerMgmtRatingsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminPlayerMgmtRatingsRoutingModule,
    StoreModule.forFeature('player-mgmt-ratings', reducer),
    EffectsModule.forFeature([PlayerMgmtRatingsEffects]),
  ],
  declarations: [PlayerMgmtRatingsComponent],
  providers: [PlayerMgmtRatingsEffects, PlayerMgmtRatingsFacade],
})
export class ChaAdminPlayerMgmtRatingsModule {}
