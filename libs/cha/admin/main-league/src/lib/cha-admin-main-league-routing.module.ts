import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainLeagueComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainLeagueComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        loadChildren: () =>
          import('@cha/admin/league-users').then(
            (mod) => mod.ChaAdminLeagueUsersModule
          ),
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('@cha/admin/league-teams').then(
            (mod) => mod.ChaAdminLeagueTeamsModule
          ),
      },
      {
        path: 'awards',
        loadChildren: () =>
          import('@cha/admin/league-users').then(
            (mod) => mod.ChaAdminLeagueUsersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminMainLeagueRoutingModule {}
