import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';

import { PlayerMgmtRatingsFacade } from './+state/player-mgmt-ratings.facade';
import { reducer } from './+state/player-mgmt-ratings.reducer';
import { PlayerMgmtRatingsEffects } from './+state/player-mgmt-ratings.effects';

import { ChaAdminPlayerMgmtRatingsRoutingModule } from './cha-admin-player-mgmt-ratings-routing.module';

import { PlayerMgmtRatingsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeButtonSelectComponent,
    ChaAdminPlayerMgmtRatingsRoutingModule,
    StoreModule.forFeature('player-mgmt-ratings', reducer),
    EffectsModule.forFeature([PlayerMgmtRatingsEffects]),
  ],
  declarations: [PlayerMgmtRatingsComponent],
  providers: [PlayerMgmtRatingsEffects, PlayerMgmtRatingsFacade],
})
export class ChaAdminPlayerMgmtRatingsModule {}
