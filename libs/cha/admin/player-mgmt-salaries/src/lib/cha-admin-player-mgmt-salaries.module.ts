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

import { PlayerMgmtSalariesEffects } from './+state/player-mgmt-salaries.effects';
import { PlayerMgmtSalariesFacade } from './+state/player-mgmt-salaries.facade';
import { reducer } from './+state/player-mgmt-salaries.reducer';

import { ChaAdminPlayerMgmtSalariesRoutingModule } from './cha-admin-player-mgmt-salaries-routing.module';

import { PlayerMgmtSalariesComponent } from './containers';
import {
  PlayerMgmtSalariesTableComponent,
  PlayerMgmtSalariesEditComponent,
  PlayerMgmtSalariesEditFormComponent,
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
    ChaAdminPlayerMgmtSalariesRoutingModule,
    StoreModule.forFeature('player-mgmt-salaries', reducer),
    EffectsModule.forFeature([PlayerMgmtSalariesEffects]),
  ],
  declarations: [
    PlayerMgmtSalariesComponent,
    PlayerMgmtSalariesTableComponent,
    PlayerMgmtSalariesEditComponent,
    PlayerMgmtSalariesEditFormComponent,
  ],
  providers: [PlayerMgmtSalariesEffects, PlayerMgmtSalariesFacade],
})
export class ChaAdminPlayerMgmtSalariesModule {}
