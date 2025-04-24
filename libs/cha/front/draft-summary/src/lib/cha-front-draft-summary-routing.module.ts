import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DraftSummaryComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: DraftSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontDraftSummaryRoutingModule {}
