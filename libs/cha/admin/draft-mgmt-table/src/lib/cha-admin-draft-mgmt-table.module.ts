import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminDraftMgmtTableRoutingModule } from './cha-admin-draft-mgmt-table-routing.module';

import { DraftMgmtTableComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminDraftMgmtTableRoutingModule],
  declarations: [DraftMgmtTableComponent],
})
export class ChaAdminDraftMgmtTableModule {}
