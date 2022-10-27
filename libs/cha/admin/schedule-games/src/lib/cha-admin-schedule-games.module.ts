import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';

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
    ReactiveFormsModule,
    ChaAdminScheduleGamesRoutingModule,
    PerfectScrollbarModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    StoreModule.forFeature('schedule-games', reducer),
    EffectsModule.forFeature([ScheduleGamesEffects]),
    FormlyModule.forRoot({
      wrappers: [
        {
          name: 'control-wrapper',
          component: DefaultFormFieldWrapperComponent,
        },
      ],
      types: [
        {
          name: 'text-input',
          component: TextInputTypeComponent,
          wrappers: ['control-wrapper'],
        },
      ],
    }),
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
