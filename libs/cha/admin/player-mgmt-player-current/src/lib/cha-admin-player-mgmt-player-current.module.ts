import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { PlayerMgmtPlayerCurrentEffects } from './+state/player-mgmt-player-current.effects';
import { PlayerMgmtPlayerCurrentFacade } from './+state/player-mgmt-player-current.facade';
import { reducer } from './+state/player-mgmt-player-current.reducer';

import { ChaAdminPlayerMgmtPlayerCurrentRoutingModule } from './cha-admin-player-mgmt-player-current-routing.module';

import { PlayerMgmtPlayerCurrentComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminPlayerMgmtPlayerCurrentRoutingModule,
    StoreModule.forFeature('player-mgmt-player-current', reducer),
    EffectsModule.forFeature([PlayerMgmtPlayerCurrentEffects]),
  ],
  declarations: [PlayerMgmtPlayerCurrentComponent],
  providers: [PlayerMgmtPlayerCurrentEffects, PlayerMgmtPlayerCurrentFacade],
})
export class ChaAdminPlayerMgmtPlayerCurrentModule {}
