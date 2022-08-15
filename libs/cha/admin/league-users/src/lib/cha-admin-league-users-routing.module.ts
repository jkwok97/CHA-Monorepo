import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueUsersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminLeagueUsersRoutingModule {}