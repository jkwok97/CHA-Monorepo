import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { ScheduleGamesEffects } from './+state/schedule-games.effects';
import { ScheduleGamesFacade } from './+state/schedule-games.facade';
import { reducer } from './+state/schedule-games.reducer';

import { ChaAdminScheduleGamesRoutingModule } from './cha-admin-schedule-games-routing.module';

import { ScheduleGamesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminScheduleGamesRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    StoreModule.forFeature('schedule-games', reducer),
    EffectsModule.forFeature([ScheduleGamesEffects]),
  ],
  declarations: [ScheduleGamesComponent],
  providers: [ScheduleGamesEffects, ScheduleGamesFacade],
})
export class ChaAdminScheduleGamesModule {}
