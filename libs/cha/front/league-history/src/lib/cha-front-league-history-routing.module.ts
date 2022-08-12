import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueHistoryComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueHistoryComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'teams',
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('@cha/front/history-teams').then(
            (mod) => mod.ChaFrontHistoryTeamsModule
          ),
      },
      // {
      //   path: 'players',
      //   loadChildren: () =>
      //     import('@cha/cha-angular/features/league-history-players').then(
      //       (mod) => mod.ChaAngularFeaturesLeagueHistoryPlayersModule
      //     ),
      // },
      // {
      //   path: 'goalies',
      //   loadChildren: () =>
      //     import('@cha/cha-angular/features/league-history-goalies').then(
      //       (mod) => mod.ChaAngularFeaturesLeagueHistoryGoaliesModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueHistoryRoutingModule {}
