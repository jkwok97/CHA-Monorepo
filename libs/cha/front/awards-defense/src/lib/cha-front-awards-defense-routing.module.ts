import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AwardsDefenseComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: AwardsDefenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontAwardsDefenseRoutingModule {}