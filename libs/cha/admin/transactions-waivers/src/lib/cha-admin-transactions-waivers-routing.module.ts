import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TransactionsWaiversComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: TransactionsWaiversComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminTransactionsWaiversRoutingModule {}
