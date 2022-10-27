import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainScheduleRoutingModule } from './cha-admin-main-schedule-routing.module';

import { MainScheduleComponent } from './containers';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminMainScheduleRoutingModule,
    BladeAngularUiLayoutModule,
    PerfectScrollbarModule,
  ],
  declarations: [MainScheduleComponent],
})
export class ChaAdminMainScheduleModule {}
