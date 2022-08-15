import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainTransactionsRoutingModule } from './cha-admin-main-transactions-routing.module';

import { MainTransactionsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminMainTransactionsRoutingModule],
  declarations: [MainTransactionsComponent],
})
export class ChaAdminMainTransactionsModule {}
