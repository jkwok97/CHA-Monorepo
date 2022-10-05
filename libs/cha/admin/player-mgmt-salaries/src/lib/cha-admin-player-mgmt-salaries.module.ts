import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminPlayerMgmtSalariesRoutingModule } from './cha-admin-player-mgmt-salaries-routing.module';

import { PlayerMgmtSalariesComponent } from './containers';
import {
  PlayerMgmtSalariesAddComponent,
  PlayerMgmtSalariesAddFormComponent,
  PlayerMgmtSalariesAllComponent,
} from './components';

@NgModule({
  imports: [CommonModule, ChaAdminPlayerMgmtSalariesRoutingModule],
  declarations: [
    PlayerMgmtSalariesComponent,
    PlayerMgmtSalariesAddComponent,
    PlayerMgmtSalariesAddFormComponent,
    PlayerMgmtSalariesAllComponent,
  ],
})
export class ChaAdminPlayerMgmtSalariesModule {}
