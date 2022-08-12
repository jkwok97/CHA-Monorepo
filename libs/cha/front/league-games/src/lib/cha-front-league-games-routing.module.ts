import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueGamesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueGamesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current',
      },
      {
        path: 'current',
        loadChildren: () =>
          import('@cha/front/games-current').then(
            (mod) => mod.ChaFrontGamesCurrentModule
          ),
      },
      {
        path: 'upcoming',
        loadChildren: () =>
          import('@cha/front/games-upcoming').then(
            (mod) => mod.ChaFrontGamesUpcomingModule
          ),
      },
      //   {
      //     path: 'all',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/games-all').then(
      //         (mod) => mod.ChaAngularFeaturesGamesAllModule
      //       ),
      //   },
      //   {
      //     path: 'playoffs',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/games-playoffs').then(
      //         (mod) => mod.ChaAngularFeaturesGamesPlayoffsModule
      //       ),
      //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueGamesRoutingModule {}
