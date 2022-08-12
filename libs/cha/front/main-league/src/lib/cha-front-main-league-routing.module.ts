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
        redirectTo: 'stats',
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('@cha/front/league-stats').then(
            (mod) => mod.ChaFrontLeagueStatsModule
          ),
      },
      {
        path: 'games',
        loadChildren: () =>
          import('@cha/front/league-games').then(
            (mod) => mod.ChaFrontLeagueGamesModule
          ),
      },
      //   {
      //     path: 'teams',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/teams').then(
      //         (mod) => mod.ChaAngularFeaturesTeamsModule
      //       ),
      //   },
      {
        path: 'trades',
        loadChildren: () =>
          import('@cha/front/league-trades').then(
            (mod) => mod.ChaFrontLeagueTradesModule
          ),
      },
      {
        path: 'salaries',
        loadChildren: () =>
          import('@cha/front/league-salaries').then(
            (mod) => mod.ChaFrontLeagueSalariesModule
          ),
      },
      {
        path: 'ratings',
        loadChildren: () =>
          import('@cha/front/league-ratings').then(
            (mod) => mod.ChaFrontLeagueRatingsModule
          ),
      },
      //   {
      //     path: 'waivers',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/waivers').then(
      //         (mod) => mod.ChaAngularFeaturesWaiversModule
      //       ),
      //   },
      //   {
      //     path: 'history',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/league-history').then(
      //         (mod) => mod.ChaAngularFeaturesLeagueHistoryModule
      //       ),
      //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontMainLeagueRoutingModule {}
