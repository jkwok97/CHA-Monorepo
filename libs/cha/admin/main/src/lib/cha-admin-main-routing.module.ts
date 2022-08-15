import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './containers';
import { MainResolver } from './resolvers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
        resolve: [MainResolver],
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@cha/admin/home').then((mod) => mod.ChaAdminHomeModule),
      },
      {
        path: 'league',
        loadChildren: () =>
          import('@cha/admin/main-league').then(
            (mod) => mod.ChaAdminMainLeagueModule
          ),
      },
      {
        path: 'players',
        loadChildren: () =>
          import('@cha/admin/main-player-mgmt').then(
            (mod) => mod.ChaAdminMainPlayerMgmtModule
          ),
      },
      {
        path: 'draft',
        loadChildren: () =>
          import('@cha/admin/main-draft-mgmt').then(
            (mod) => mod.ChaAdminMainDraftMgmtModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('@cha/admin/main-transactions').then(
            (mod) => mod.ChaAdminMainTransactionsModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('@cha/admin/main-schedule').then(
            (mod) => mod.ChaAdminMainScheduleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminMainRoutingModule {}
