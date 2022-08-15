import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueTeamsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueTeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminLeagueTeamsRoutingModule {}
