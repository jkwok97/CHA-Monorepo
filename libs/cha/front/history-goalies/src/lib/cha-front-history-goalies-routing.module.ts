import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HistoryGoaliesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HistoryGoaliesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHistoryGoaliesRoutingModule {}
