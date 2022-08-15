import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainPlayerMgmtComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainPlayerMgmtComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info',
      },
      {
        path: 'info',
        loadChildren: () =>
          import('@cha/admin/player-mgmt-info').then(
            (mod) => mod.ChaAdminPlayerMgmtInfoModule
          ),
      },
      {
        path: 'salaries',
        loadChildren: () =>
          import('@cha/admin/player-mgmt-salaries').then(
            (mod) => mod.ChaAdminPlayerMgmtSalariesModule
          ),
      },
      {
        path: 'ratings',
        loadChildren: () =>
          import('@cha/admin/league-awards').then(
            (mod) => mod.ChaAdminLeagueAwardsModule
          ),
      },
      {
        path: 'players-current',
        loadChildren: () =>
          import('@cha/admin/league-awards').then(
            (mod) => mod.ChaAdminLeagueAwardsModule
          ),
      },
      {
        path: 'goalies-current',
        loadChildren: () =>
          import('@cha/admin/league-awards').then(
            (mod) => mod.ChaAdminLeagueAwardsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminMainPlayerMgmtRoutingModule {}
