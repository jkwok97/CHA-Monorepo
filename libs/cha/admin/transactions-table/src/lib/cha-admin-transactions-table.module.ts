import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

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
  ],
  declarations: [TransactionTradesComponent],
})
export class ChaAdminTransactionsTableModule {}
