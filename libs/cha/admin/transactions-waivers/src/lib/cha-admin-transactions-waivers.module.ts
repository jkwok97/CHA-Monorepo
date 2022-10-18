import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TransactionsWaiverssEffects } from './+state/transactions-waivers.effects';
import { TransactionsWaiversFacade } from './+state/transactions-waivers.facade';
import { reducer } from './+state/transactions-waivers.reducer';

import { ChaAdminTransactionsWaiversRoutingModule } from './cha-admin-transactions-waivers-routing.module';

import { TransactionsWaiversComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminTransactionsWaiversRoutingModule,
    StoreModule.forFeature('transactions-waivers', reducer),
    EffectsModule.forFeature([TransactionsWaiverssEffects]),
  ],
  declarations: [TransactionsWaiversComponent],
  providers: [TransactionsWaiverssEffects, TransactionsWaiversFacade],
})
export class ChaAdminTransactionsWaiversModule {}
