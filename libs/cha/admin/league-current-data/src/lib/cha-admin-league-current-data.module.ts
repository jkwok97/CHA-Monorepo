import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { CheckboxTypeComponent } from '@blade/angular/formly/types/checkbox';
import {
  TextInputTypeComponent,
  NumberInputTypeComponent,
} from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';

import { ChaAdminLeagueCurrentDataRoutingModule } from './cha-admin-league-current-data-routing.module';

import { LeagueCurrentDataComponent } from './containers';
import {
  LeagueCurrentDataEditComponent,
  LeagueCurrentDataEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChaAdminLeagueCurrentDataRoutingModule,
    ProgressBarModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeAngularUiCardModule,
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
          name: 'number-input',
          component: NumberInputTypeComponent,
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
    LeagueCurrentDataComponent,
    LeagueCurrentDataEditComponent,
    LeagueCurrentDataEditFormComponent,
  ],
})
export class ChaAdminLeagueCurrentDataModule {}
