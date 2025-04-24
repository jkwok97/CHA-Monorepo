import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AwardsSeasonComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: AwardsSeasonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontAwardsSeasonRoutingModule {}
