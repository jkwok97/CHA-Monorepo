import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { ScheduleGamesEffects } from './+state/schedule-games.effects';
import { ScheduleGamesFacade } from './+state/schedule-games.facade';
import { reducer } from './+state/schedule-games.reducer';

import { ChaAdminScheduleGamesRoutingModule } from './cha-admin-schedule-games-routing.module';

import { ScheduleGamesComponent } from './containers';
import {
  ScheduleGamesTableComponent,
  ScheduleGamesEditComponent,
  ScheduleGamesEditFormComponent,
} from './components';


@NgModule({
  imports: [
    CommonModule,
    ChaAdminScheduleGamesRoutingModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    StoreModule.forFeature('schedule-games', reducer),
    EffectsModule.forFeature([ScheduleGamesEffects]),
  ],
  declarations: [
    ScheduleGamesComponent,
    ScheduleGamesTableComponent,
    ScheduleGamesEditComponent,
    ScheduleGamesEditFormComponent,
  ],
  providers: [ScheduleGamesEffects, ScheduleGamesFacade],
})
export class ChaAdminScheduleGamesModule {}
