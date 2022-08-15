import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminPlayerMgmtPlayerCurrentRoutingModule } from './cha-admin-player-mgmt-player-current-routing.module';

import { PlayerMgmtPlayerCurrentComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminPlayerMgmtPlayerCurrentRoutingModule],
  declarations: [PlayerMgmtPlayerCurrentComponent],
})
export class ChaAdminPlayerMgmtPlayerCurrentModule {}
