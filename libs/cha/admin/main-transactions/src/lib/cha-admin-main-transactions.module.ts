import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaAdminMainTransactionsRoutingModule } from './cha-admin-main-transactions-routing.module';

import { MainTransactionsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    BladeAngularUiLayoutModule,
    ChaAdminMainTransactionsRoutingModule,
  ],
  declarations: [MainTransactionsComponent],
})
export class ChaAdminMainTransactionsModule {}
