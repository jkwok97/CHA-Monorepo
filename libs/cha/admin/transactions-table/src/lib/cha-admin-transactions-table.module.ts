import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { RepeatingTypeComponent } from '@blade/angular/formly/types/repeating';

import { TransactionsTableFacade } from './+state/transactions-table.facade';
import { reducer } from './+state/transactions-table.reducer';
import { TransactionsTableEffects } from './+state/transactions-table.effects';

import { ChaAdminTransactionsTableRoutingModule } from './cha-admin-transactions-table-routing.module';

import { TransactionTradesComponent } from './containers';
import {
  TransactionsTableTableComponent,
  TransactionsTableEditComponent,
  TransactionsTableEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChaAdminTransactionsTableRoutingModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeAngularUiCardModule,
    StoreModule.forFeature('transactions-table', reducer),
    EffectsModule.forFeature([TransactionsTableEffects]),
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
          name: 'repeating',
          component: RepeatingTypeComponent,
        },
      ],
    }),
  ],
  declarations: [
    TransactionTradesComponent,
    TransactionsTableTableComponent,
    TransactionsTableEditComponent,
    TransactionsTableEditFormComponent,
  ],
  providers: [TransactionsTableEffects, TransactionsTableFacade],
})
export class ChaAdminTransactionsTableModule {}
