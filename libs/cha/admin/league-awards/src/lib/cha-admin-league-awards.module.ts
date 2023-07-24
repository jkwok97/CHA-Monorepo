import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormlyModule } from '@ngx-formly/core';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { SingleSelectTypeComponent } from '@blade/angular/formly/types/single-select';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';

import { LeagueAwardsEffects } from './+state/league-awards.effects';
import { LeagueAwardsFacade } from './+state/league-awards.facade';
import { reducer } from './+state/league-awards.reducer';

import { ChaAdminLeagueAwardsRoutingModule } from './cha-admin-league-awards-routing.module';

import { LeagueAwardsComponent } from './containers';
import {
  LeagueAwardsTableComponent,
  LeagueAwardsEditComponent,
  LeagueAwardsEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    ChaAdminLeagueAwardsRoutingModule,
    StoreModule.forFeature('league-awards', reducer),
    EffectsModule.forFeature([LeagueAwardsEffects]),
    FormlyModule.forRoot({
      wrappers: [
        {
          name: 'control-wrapper',
          component: DefaultFormFieldWrapperComponent,
        },
      ],
      types: [
        {
          name: 'single-select',
          component: SingleSelectTypeComponent,
          wrappers: ['control-wrapper'],
        },
        {
          name: 'text-input',
          component: TextInputTypeComponent,
          wrappers: ['control-wrapper'],
        },
      ],
    }),
  ],
  declarations: [
    LeagueAwardsComponent,
    LeagueAwardsTableComponent,
    LeagueAwardsEditComponent,
    LeagueAwardsEditFormComponent,
  ],
  providers: [LeagueAwardsEffects, LeagueAwardsFacade],
})
export class ChaAdminLeagueAwardsModule {}
