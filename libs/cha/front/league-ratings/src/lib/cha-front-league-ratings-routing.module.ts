import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueRatingsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueRatingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontLeagueRatingsRoutingModule {}