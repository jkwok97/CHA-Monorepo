import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminPlayerMgmtSalariesRoutingModule } from './cha-admin-player-mgmt-salaries-routing.module';

import { PlayerMgmtSalariesComponent } from './containers';
import { PlayerMgmtSalariesAddComponent } from './components/player-mgmt-salaries-add/player-mgmt-salaries-add.component';
import { PlayerMgmtSalariesAddFormComponent } from './components/player-mgmt-salaries-add-form/player-mgmt-salaries-add-form.component';
import { PlayerMgmtSalariesAllComponent } from './components/player-mgmt-salaries-all/player-mgmt-salaries-all.component';

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
