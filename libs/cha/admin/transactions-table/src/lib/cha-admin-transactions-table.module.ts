import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { TransactionsTableFacade } from './+state/transactions-table.facade';
import { reducer } from './+state/transactions-table.reducer';
import { TransactionsTableEffects } from './+state/transactions-table.effects';

import { ChaAdminTransactionsTableRoutingModule } from './cha-admin-transactions-table-routing.module';

import { TransactionTradesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminTransactionsTableRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeAngularUiCardModule,
    StoreModule.forFeature('transactions-table', reducer),
    EffectsModule.forFeature([TransactionsTableEffects]),
  ],
  declarations: [TransactionTradesComponent],
  providers: [TransactionsTableEffects, TransactionsTableFacade],
})
export class ChaAdminTransactionsTableModule {}
