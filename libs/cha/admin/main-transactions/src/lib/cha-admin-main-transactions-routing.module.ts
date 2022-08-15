import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainTransactionsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainTransactionsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'trades',
      },
      {
        path: 'trades',
        loadChildren: () =>
          import('@cha/admin/transactions-trades').then(
            (mod) => mod.ChaAdminTransactionsTradesModule
          ),
      },
      {
        path: 'waiver',
        loadChildren: () =>
          import('@cha/admin/transactions-waivers').then(
            (mod) => mod.ChaAdminTransactionsWaiversModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminMainTransactionsRoutingModule {}
