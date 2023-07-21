import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainDraftMgmtRoutingModule } from './cha-admin-main-draft-mgmt-routing.module';

import { MainDraftMgmtComponent } from './containers';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminMainDraftMgmtRoutingModule,
    NgScrollbarModule,
    BladeAngularUiLayoutModule,
  ],
  declarations: [MainDraftMgmtComponent],
})
export class ChaAdminMainDraftMgmtModule {}
