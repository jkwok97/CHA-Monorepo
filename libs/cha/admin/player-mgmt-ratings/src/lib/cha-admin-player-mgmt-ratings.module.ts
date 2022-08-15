import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminPlayerMgmtRatingsRoutingModule } from './cha-admin-player-mgmt-ratings-routing.module';

import { PlayerMgmtRatingsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminPlayerMgmtRatingsRoutingModule],
  declarations: [PlayerMgmtRatingsComponent],
})
export class ChaAdminPlayerMgmtRatingsModule {}
