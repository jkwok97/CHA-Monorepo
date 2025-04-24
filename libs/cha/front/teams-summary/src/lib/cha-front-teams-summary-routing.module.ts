import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { TeamsSummaryComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: TeamsSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontTeamsSummaryRoutingModule {}
