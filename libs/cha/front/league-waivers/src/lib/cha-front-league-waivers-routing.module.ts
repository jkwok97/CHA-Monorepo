import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueWaiversComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueWaiversComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueWaiversRoutingModule {}