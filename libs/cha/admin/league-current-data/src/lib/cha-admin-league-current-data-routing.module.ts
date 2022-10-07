import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueCurrentDataComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueCurrentDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminLeagueCurrentDataRoutingModule {}
