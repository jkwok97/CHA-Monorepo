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
          import('@cha/admin/player-mgmt-ratings').then(
            (mod) => mod.ChaAdminPlayerMgmtRatingsModule
          ),
      },
      {
        path: 'players-current',
        loadChildren: () =>
          import('@cha/admin/player-mgmt-player-current').then(
            (mod) => mod.ChaAdminPlayerMgmtPlayerCurrentModule
          ),
      },
      {
        path: 'goalies-current',
        loadChildren: () =>
          import('@cha/admin/player-mgmt-goalie-current').then(
            (mod) => mod.ChaAdminPlayerMgmtGoalieCurrentModule
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
