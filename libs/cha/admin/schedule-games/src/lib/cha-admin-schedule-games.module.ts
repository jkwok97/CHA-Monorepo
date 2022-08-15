import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminScheduleGamesRoutingModule } from './cha-admin-schedule-games-routing.module';

import { ScheduleGamesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminScheduleGamesRoutingModule],
  declarations: [ScheduleGamesComponent],
})
export class ChaAdminScheduleGamesModule {}
