import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { StatsTeamLeadersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: StatsTeamLeadersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontStatsTeamLeadersRoutingModule {}
