import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HistoryPlayersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HistoryPlayersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHistoryPlayersRoutingModule {}
