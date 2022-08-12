import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueTradesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueTradesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueTradesRoutingModule {}