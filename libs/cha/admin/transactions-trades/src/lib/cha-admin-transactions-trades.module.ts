import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminTransactionsTradesRoutingModule } from './cha-admin-transactions-trades-routing.module';

import { TransactionsTradesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminTransactionsTradesRoutingModule],
  declarations: [TransactionsTradesComponent],
})
export class ChaAdminTransactionsTradesModule {}
