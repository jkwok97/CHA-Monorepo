import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GamesPlayoffsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: GamesPlayoffsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontGamesPlayoffsRoutingModule {}
