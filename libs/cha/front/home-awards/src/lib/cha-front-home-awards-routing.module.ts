import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeAwardsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeAwardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHomeAwardsRoutingModule {}