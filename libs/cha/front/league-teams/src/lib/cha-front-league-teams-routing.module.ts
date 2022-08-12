import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueTeamsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueTeamsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LeagueTeamsComponent,
      },
      {
        path: ':teamId',
        loadChildren: () =>
          import('@cha/front/teams-summary').then(
            (mod) => mod.ChaFrontTeamsSummaryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueTeamsRoutingModule {}
