import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminPlayerMgmtInfoRoutingModule } from './cha-admin-player-mgmt-info-routing.module';

import { PlayerMgmtInfoComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminPlayerMgmtInfoRoutingModule],
  declarations: [PlayerMgmtInfoComponent],
})
export class ChaAdminPlayerMgmtInfoModule {}
