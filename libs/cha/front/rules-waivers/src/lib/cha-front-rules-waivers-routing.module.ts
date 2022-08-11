import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RulesWaiversComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: RulesWaiversComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontRulesWaiversRoutingModule {}
