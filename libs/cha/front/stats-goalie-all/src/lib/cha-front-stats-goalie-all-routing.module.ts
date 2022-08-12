import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { StatsGoalieAllComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: StatsGoalieAllComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontStatsGoalieAllRoutingModule {}