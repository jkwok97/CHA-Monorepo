import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { CheckboxTypeComponent } from '@blade/angular/formly/types/checkbox';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';

import { LeagueConferencesEffects } from './+state/league-conferences.effects';
import { reducer } from './+state/league-conferences.reducer';
import { LeagueConferencesFacade } from './+state/league-conferences.facade';

import { ChaAdminLeagueConferencesRoutingModule } from './cha-admin-league-conferences-routing.module';

import { LeagueConferencesComponent } from './containers';
import {
  LeagueConferencesTableComponent,
  LeagueConferencesEditComponent,
  LeagueConferencesEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChaAdminLeagueConferencesRoutingModule,
    NgScrollbarModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    StoreModule.forFeature('league-conferences', reducer),
    EffectsModule.forFeature([LeagueConferencesEffects]),
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
        {
          name: 'checkbox',
          component: CheckboxTypeComponent,
        },
      ],
    }),
  ],
  declarations: [
    LeagueConferencesComponent,
    LeagueConferencesTableComponent,
    LeagueConferencesEditComponent,
    LeagueConferencesEditFormComponent,
  ],
  providers: [LeagueConferencesEffects, LeagueConferencesFacade],
})
export class ChaAdminLeagueConferencesModule {}
