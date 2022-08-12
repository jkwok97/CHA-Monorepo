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
      {
        path: 'goalies-leaders',
        loadChildren: () =>
          import('@cha/front/stats-goalie-leaders').then(
            (mod) => mod.ChaFrontStatsGoalieLeadersModule
          ),
      },
      {
        path: 'teams-detailed',
        loadChildren: () =>
          import('@cha/front/stats-team-all').then(
            (mod) => mod.ChaFrontStatsTeamAllModule
          ),
      },
      {
        path: 'players-detailed',
        loadChildren: () =>
          import('@cha/front/stats-player-all').then(
            (mod) => mod.ChaFrontStatsPlayerAllModule
          ),
      },
      {
        path: 'goalies-detailed',
        loadChildren: () =>
          import('@cha/front/stats-goalie-all').then(
            (mod) => mod.ChaFrontStatsGoalieAllModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueStatsRoutingModule {}
