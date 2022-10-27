import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminTransactionsTableRoutingModule } from './cha-admin-transactions-table-routing.module';

import { TransactionTradesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminTransactionsTableRoutingModule],
  declarations: [TransactionTradesComponent],
})
export class ChaAdminTransactionsTableModule {}
