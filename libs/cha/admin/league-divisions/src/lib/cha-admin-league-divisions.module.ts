import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormlyModule } from '@ngx-formly/core';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { CheckboxTypeComponent } from '@blade/angular/formly/types/checkbox';
import { SingleSelectTypeComponent } from '@blade/angular/formly/types/single-select';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';

import { LeagueDivisionsEffects } from './+state/league-divisions.effects';
import { LeagueDivisionsFacade } from './+state/league-divisions.facade';
import { reducer } from './+state/league-divisions.reducer';

import { ChaAdminLeagueDivisionsRoutingModule } from './cha-admin-league-divisions-routing.module';

import { LeagueDivisionsComponent } from './containers';
import {
  LeagueDivisionsTableComponent,
  LeagueDivisionsEditComponent,
  LeagueDivisionsEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChaAdminLeagueDivisionsRoutingModule,
    PerfectScrollbarModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    StoreModule.forFeature('league-divisions', reducer),
    EffectsModule.forFeature([LeagueDivisionsEffects]),
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
    LeagueDivisionsComponent,
    LeagueDivisionsTableComponent,
    LeagueDivisionsEditComponent,
    LeagueDivisionsEditFormComponent,
  ],
  providers: [LeagueDivisionsEffects, LeagueDivisionsFacade],
})
export class ChaAdminLeagueDivisionsModule {}
