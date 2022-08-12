import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { StatsGoalieLeadersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: StatsGoalieLeadersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontStatsGoalieLeadersRoutingModule {}