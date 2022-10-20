import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TransactionsTradesEffects } from './+state/transactions-trades.effects';
import { reducer } from './+state/transactions-trades.reducer';
import { TransactionsTradesFacade } from './+state/transactions-trades.facade';

import { ChaAdminTransactionsTradesRoutingModule } from './cha-admin-transactions-trades-routing.module';

import { TransactionsTradesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminTransactionsTradesRoutingModule,
    StoreModule.forFeature('transactions-trades', reducer),
    EffectsModule.forFeature([TransactionsTradesEffects]),
  ],
  declarations: [TransactionsTradesComponent],
  providers: [TransactionsTradesEffects, TransactionsTradesFacade],
})
export class ChaAdminTransactionsTradesModule {}
