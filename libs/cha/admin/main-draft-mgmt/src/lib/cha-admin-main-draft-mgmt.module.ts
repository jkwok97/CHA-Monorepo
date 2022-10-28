import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainDraftMgmtRoutingModule } from './cha-admin-main-draft-mgmt-routing.module';

import { MainDraftMgmtComponent } from './containers';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminMainDraftMgmtRoutingModule,
    PerfectScrollbarModule,
    BladeAngularUiLayoutModule,
  ],
  declarations: [MainDraftMgmtComponent],
})
export class ChaAdminMainDraftMgmtModule {}
