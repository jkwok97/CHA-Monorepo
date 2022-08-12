import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueStatsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'teams-leaders',
      },
      {
        path: 'teams-leaders',
        loadChildren: () =>
          import('@cha/front/stats-team-leaders').then(
            (mod) => mod.ChaFrontStatsTeamLeadersModule
          ),
      },
      {
        path: 'players-leaders',
        loadChildren: () =>
          import('@cha/front/stats-player-leaders').then(
            (mod) => mod.ChaFrontStatsPlayerLeadersModule
          ),
      },
      //   {
      //     path: 'goalies-leaders',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/league-stats-goalies').then(
      //         (mod) => mod.ChaAngularFeaturesLeagueStatsGoaliesModule
      //       ),
      //   },
      //   {
      //     path: 'teams-detailed',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/league-stats-team-detailed').then(
      //         (mod) => mod.ChaAngularFeaturesLeagueStatsTeamDetailedModule
      //       ),
      //   },
      //   {
      //     path: 'players-detailed',
      //     loadChildren: () =>
      //       import(
      //         '@cha/cha-angular/features/league-stats-players-detailed'
      //       ).then(
      //         (mod) => mod.ChaAngularFeaturesLeagueStatsPlayersDetailedModule
      //       ),
      //   },
      //   {
      //     path: 'goalies-detailed',
      //     loadChildren: () =>
      //       import(
      //         '@cha/cha-angular/features/league-stats-goalies-detailed'
      //       ).then(
      //         (mod) => mod.ChaAngularFeaturesLeagueStatsGoaliesDetailedModule
      //       ),
      //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueStatsRoutingModule {}
