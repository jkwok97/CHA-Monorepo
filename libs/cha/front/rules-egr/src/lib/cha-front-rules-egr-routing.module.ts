import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RulesEgrComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: RulesEgrComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontRulesEgrRoutingModule {}