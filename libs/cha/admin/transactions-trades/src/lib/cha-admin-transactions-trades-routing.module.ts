import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TransactionsTradesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: TransactionsTradesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminTransactionsTradesRoutingModule {}
