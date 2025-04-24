import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HistoryTeamsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HistoryTeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHistoryTeamsRoutingModule {}
