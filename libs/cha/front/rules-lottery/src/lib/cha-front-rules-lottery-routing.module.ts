import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RulesLotteryComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: RulesLotteryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontRulesLotteryRoutingModule {}
