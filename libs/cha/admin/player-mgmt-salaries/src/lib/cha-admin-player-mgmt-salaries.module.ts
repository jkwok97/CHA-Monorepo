import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminPlayerMgmtSalariesRoutingModule } from './cha-admin-player-mgmt-salaries-routing.module';

import { PlayerMgmtSalariesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminPlayerMgmtSalariesRoutingModule],
  declarations: [PlayerMgmtSalariesComponent],
})
export class ChaAdminPlayerMgmtSalariesModule {}
