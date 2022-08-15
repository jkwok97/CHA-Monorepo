import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainPlayerMgmtRoutingModule } from './cha-admin-main-player-mgmt-routing.module';

import { MainPlayerMgmtComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminMainPlayerMgmtRoutingModule],
  declarations: [MainPlayerMgmtComponent],
})
export class ChaAdminMainPlayerMgmtModule {}
