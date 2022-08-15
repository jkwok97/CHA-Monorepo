import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainScheduleRoutingModule } from './cha-admin-main-schedule-routing.module';

import { MainScheduleComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminMainScheduleRoutingModule],
  declarations: [MainScheduleComponent],
})
export class ChaAdminMainScheduleModule {}
