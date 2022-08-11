import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RulesRostersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: RulesRostersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontRulesRostersRoutingModule {}
