import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeGoaliesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeGoaliesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHomeGoaliesRoutingModule {}
