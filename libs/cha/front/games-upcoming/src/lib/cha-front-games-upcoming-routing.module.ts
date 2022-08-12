import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GamesUpcomingComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: GamesUpcomingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontGamesUpcomingRoutingModule {}