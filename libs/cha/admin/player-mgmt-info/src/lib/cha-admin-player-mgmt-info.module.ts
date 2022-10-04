import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { PlayerMgmtInfoFacade } from './+state/player-mgmt-info.facade';
import { reducer } from './+state/player-mgmt-info.reducer';
import { PlayerMgmtInfoEffects } from './+state/player-mgmt-info.effects';

import { ChaAdminPlayerMgmtInfoRoutingModule } from './cha-admin-player-mgmt-info-routing.module';

import { PlayerMgmtInfoComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminPlayerMgmtInfoRoutingModule,
    StoreModule.forFeature('player-mgmt-info', reducer),
    EffectsModule.forFeature([PlayerMgmtInfoEffects]),
  ],
  declarations: [PlayerMgmtInfoComponent],
  providers: [PlayerMgmtInfoEffects, PlayerMgmtInfoFacade],
})
export class ChaAdminPlayerMgmtInfoModule {}
