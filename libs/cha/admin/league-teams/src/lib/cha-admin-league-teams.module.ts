import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { CheckboxTypeComponent } from '@blade/angular/formly/types/checkbox';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { SingleSelectTypeComponent } from '@blade/angular/formly/types/single-select';

import { LeagueTeamsEffects } from './+state/league-teams.effects';
import { LeagueTeamsFacade } from './+state/league-teams.facade';
import { reducer } from './+state/league-teams.reducer';

import { ChaAdminLeagueTeamsRoutingModule } from './cha-admin-league-teams-routing.module';

import { LeagueTeamsComponent } from './containers';
import {
  LeagueTeamsEditComponent,
  LeagueTeamsEditFormComponent,
  LeagueTeamsTableComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminLeagueTeamsRoutingModule,
    StoreModule.forFeature('league-teams', reducer),
    EffectsModule.forFeature([LeagueTeamsEffects]),
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
        {
          name: 'single-select',
          component: SingleSelectTypeComponent,
          wrappers: ['control-wrapper'],
        },
      ],
    }),
  ],
  declarations: [
    LeagueTeamsComponent,
    LeagueTeamsEditComponent,
    LeagueTeamsEditFormComponent,
    LeagueTeamsTableComponent,
  ],
  providers: [LeagueTeamsEffects, LeagueTeamsFacade],
})
export class ChaAdminLeagueTeamsModule {}
