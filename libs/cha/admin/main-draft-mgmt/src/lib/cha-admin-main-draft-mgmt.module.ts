import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainDraftMgmtRoutingModule } from './cha-admin-main-draft-mgmt-routing.module';

import { MainDraftMgmtComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminMainDraftMgmtRoutingModule],
  declarations: [MainDraftMgmtComponent],
})
export class ChaAdminMainDraftMgmtModule {}
