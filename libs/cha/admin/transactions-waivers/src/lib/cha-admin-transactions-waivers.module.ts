import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { OrderListModule } from 'primeng/orderlist';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { TransactionsWaiverssEffects } from './+state/transactions-waivers.effects';
import { TransactionsWaiversFacade } from './+state/transactions-waivers.facade';
import { reducer } from './+state/transactions-waivers.reducer';

import { ChaAdminTransactionsWaiversRoutingModule } from './cha-admin-transactions-waivers-routing.module';

import { TransactionsWaiversComponent } from './containers';
import { TransactionsWaiversOrderListComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    OrderListModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    ChaAdminTransactionsWaiversRoutingModule,
    StoreModule.forFeature('transactions-waivers', reducer),
    EffectsModule.forFeature([TransactionsWaiverssEffects]),
  ],
  declarations: [
    TransactionsWaiversComponent,
    TransactionsWaiversOrderListComponent,
  ],
  providers: [TransactionsWaiverssEffects, TransactionsWaiversFacade],
})
export class ChaAdminTransactionsWaiversModule {}
