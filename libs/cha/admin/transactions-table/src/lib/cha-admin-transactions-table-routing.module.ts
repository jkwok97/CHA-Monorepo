import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TransactionTradesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: TransactionTradesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminTransactionsTableRoutingModule {}
