import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueAwardsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueAwardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminLeagueAwardsRoutingModule {}