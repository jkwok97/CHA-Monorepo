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
        path: 'current-data',
        loadChildren: () =>
          import('@cha/admin/league-current-data').then(
            (mod) => mod.ChaAdminLeagueCurrentDataModule
          ),
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
        path: 'divisions',
        loadChildren: () =>
          import('@cha/admin/league-divisions').then(
            (mod) => mod.ChaAdminLeagueDivisionsModule
          ),
      },
      {
        path: 'conferences',
        loadChildren: () =>
          import('@cha/admin/league-conferences').then(
            (mod) => mod.ChaAdminLeagueConferencesModule
          ),
      },
      {
        path: 'awards',
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
export class ChaAdminMainLeagueRoutingModule {}
