import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { StatsPlayerAllComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: StatsPlayerAllComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontStatsPlayerAllRoutingModule {}