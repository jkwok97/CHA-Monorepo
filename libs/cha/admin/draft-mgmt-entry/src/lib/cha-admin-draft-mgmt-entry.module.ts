import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminDraftMgmtEntryRoutingModule } from './cha-admin-draft-mgmt-entry-routing.module';

import { DraftMgmtEntryComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminDraftMgmtEntryRoutingModule],
  declarations: [DraftMgmtEntryComponent],
})
export class ChaAdminDraftMgmtEntryModule {}
