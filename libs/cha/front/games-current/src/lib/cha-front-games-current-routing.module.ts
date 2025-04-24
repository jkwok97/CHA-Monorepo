import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GamesCurrentComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: GamesCurrentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontGamesCurrentRoutingModule {}
