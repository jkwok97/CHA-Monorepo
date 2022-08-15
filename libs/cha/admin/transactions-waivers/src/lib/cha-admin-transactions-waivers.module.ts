import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminTransactionsWaiversRoutingModule } from './cha-admin-transactions-waivers-routing.module';

import { TransactionsWaiversComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminTransactionsWaiversRoutingModule],
  declarations: [TransactionsWaiversComponent],
})
export class ChaAdminTransactionsWaiversModule {}
