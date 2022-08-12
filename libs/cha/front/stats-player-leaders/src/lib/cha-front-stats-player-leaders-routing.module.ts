import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { StatsPlayersLeadersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: StatsPlayersLeadersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontStatsPlayerPleadersRoutingModule {}