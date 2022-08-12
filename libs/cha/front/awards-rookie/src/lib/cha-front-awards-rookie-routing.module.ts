import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AwardsRookieComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: AwardsRookieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontAwardsRookieRoutingModule {}