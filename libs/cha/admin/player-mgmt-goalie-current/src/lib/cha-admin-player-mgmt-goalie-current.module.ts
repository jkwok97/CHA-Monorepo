import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminPlayerMgmtGoalieCurrentRoutingModule } from './cha-admin-player-mgmt-goalie-current-routing.module';

import { PlayerMgmtGoalieCurrentComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminPlayerMgmtGoalieCurrentRoutingModule],
  declarations: [PlayerMgmtGoalieCurrentComponent],
})
export class ChaAdminPlayerMgmtGoalieCurrentModule {}
