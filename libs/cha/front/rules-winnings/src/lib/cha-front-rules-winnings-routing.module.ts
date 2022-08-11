import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RulesWinningsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: RulesWinningsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontRulesWinningsRoutingModule {}
