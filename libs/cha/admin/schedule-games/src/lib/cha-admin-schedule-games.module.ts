import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminScheduleGamesRoutingModule } from './cha-admin-schedule-games-routing.module';

import { ScheduleGamesComponent } from './containers';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminScheduleGamesRoutingModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
  ],
  declarations: [ScheduleGamesComponent],
})
export class ChaAdminScheduleGamesModule {}
