import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AwardsGmComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: AwardsGmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontAwardsGmRoutingModule {}