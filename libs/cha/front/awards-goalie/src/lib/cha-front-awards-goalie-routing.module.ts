import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AwardsGoalieComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: AwardsGoalieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontAwardsGoalieRoutingModule {}
