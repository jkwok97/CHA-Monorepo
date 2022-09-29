import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueUsersFacade } from './+state/league-users.facade';
import { LeagueUsersEffects } from './+state/league-users.effects';
import { reducer } from './+state/league-users.reducer';

import { TextInputTypeComponent } from 'libs/blade/angular/formly/types/text-input/src';
import { RadioTypeComponent } from 'libs/blade/angular/formly/types/radio/src';
import { EmailInputComponent } from '@blade/angular/formly/types/email-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { FormlyModule } from '@ngx-formly/core';

import { ChaAdminLeagueUsersRoutingModule } from './cha-admin-league-users-routing.module';

import { LeagueUsersComponent } from './containers';
import {
  LeagueUsersTableComponent,
  LeagueUsersEditComponent,
  LeagueUsersEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminLeagueUsersRoutingModule,
    StoreModule.forFeature('league-users', reducer),
    EffectsModule.forFeature([LeagueUsersEffects]),
    FormlyModule.forRoot({
      wrappers: [
        {
          name: 'control-wrapper',
          component: DefaultFormFieldWrapperComponent,
        },
      ],
      types: [
        {
          name: 'email-input',
          component: EmailInputComponent,
          wrappers: ['control-wrapper'],
        },
        {
          name: 'text-input',
          component: TextInputTypeComponent,
          wrappers: ['control-wrapper'],
        },
        {
          name: 'radio',
          component: RadioTypeComponent,
          wrappers: ['control-wrapper'],
        },
      ],
    }),
  ],
  declarations: [
    LeagueUsersComponent,
    LeagueUsersTableComponent,
    LeagueUsersEditComponent,
    LeagueUsersEditFormComponent,
  ],
  providers: [LeagueUsersEffects, LeagueUsersFacade],
})
export class ChaAdminLeagueUsersModule {}
