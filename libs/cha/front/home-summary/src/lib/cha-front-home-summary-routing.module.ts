import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeSummaryComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHomeRoutingModule {}
