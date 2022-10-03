import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';

import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { CheckboxTypeComponent } from '@blade/angular/formly/types/checkbox';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';

import { LeagueTeamsEffects } from './+state/league-teams.effects';
import { LeagueTeamsFacade } from './+state/league-teams.facade';
import { reducer } from './+state/league-teams.reducer';

import { ChaAdminLeagueTeamsRoutingModule } from './cha-admin-league-teams-routing.module';

import { LeagueTeamsComponent } from './containers';

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
      ],
    }),
  ],
  declarations: [LeagueTeamsComponent],
  providers: [LeagueTeamsEffects, LeagueTeamsFacade],
})
export class ChaAdminLeagueTeamsModule {}
