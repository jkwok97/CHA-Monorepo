import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { PlayerMgmtInfoFacade } from './+state/player-mgmt-info.facade';
import { reducer } from './+state/player-mgmt-info.reducer';
import { PlayerMgmtInfoEffects } from './+state/player-mgmt-info.effects';

import { ChaAdminPlayerMgmtInfoRoutingModule } from './cha-admin-player-mgmt-info-routing.module';

import { PlayerMgmtInfoComponent } from './containers';
import {
  PlayerMgmtInfoTableComponent,
  PlayerMgmtInfoEditComponent,
  PlayerMgmtInfoEditFormComponent,
} from './components';



@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    TableModule,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminPlayerMgmtInfoRoutingModule,
    StoreModule.forFeature('player-mgmt-info', reducer),
    EffectsModule.forFeature([PlayerMgmtInfoEffects]),
  ],
  declarations: [
    PlayerMgmtInfoComponent,
    PlayerMgmtInfoTableComponent,
    PlayerMgmtInfoEditComponent,
    PlayerMgmtInfoEditFormComponent,
  ],
  providers: [PlayerMgmtInfoEffects, PlayerMgmtInfoFacade],
})
export class ChaAdminPlayerMgmtInfoModule {}
