import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DraftCurrentComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: DraftCurrentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontDraftCurrentRoutingModule {}
