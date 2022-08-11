import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RulesEqualizationComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: RulesEqualizationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontRulesEqualizationRoutingModule {}