import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgScrollbarModule } from 'ngx-scrollbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaAdminMainPlayerMgmtRoutingModule } from './cha-admin-main-player-mgmt-routing.module';

import { MainPlayerMgmtComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    NgScrollbarModule,
    BladeAngularUiLayoutModule,
    ChaAdminMainPlayerMgmtRoutingModule,
  ],
  declarations: [MainPlayerMgmtComponent],
})
export class ChaAdminMainPlayerMgmtModule {}
