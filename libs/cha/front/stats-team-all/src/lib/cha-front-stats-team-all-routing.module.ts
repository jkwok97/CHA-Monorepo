import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { StatsTeamAllComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: StatsTeamAllComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontStatsTeamAllRoutingModule {}
