import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PlayerMgmtSalariesEffects } from './+state/player-mgmt-salaries.effects';
import { PlayerMgmtSalariesFacade } from './+state/player-mgmt-salaries.facade';
import { reducer } from './+state/player-mgmt-salaries.reducer';

import { ChaAdminPlayerMgmtSalariesRoutingModule } from './cha-admin-player-mgmt-salaries-routing.module';

import { PlayerMgmtSalariesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminPlayerMgmtSalariesRoutingModule,
    StoreModule.forFeature('player-mgmt-salaries', reducer),
    EffectsModule.forFeature([PlayerMgmtSalariesEffects]),
  ],
  declarations: [PlayerMgmtSalariesComponent],
  providers: [PlayerMgmtSalariesEffects, PlayerMgmtSalariesFacade],
})
export class ChaAdminPlayerMgmtSalariesModule {}
