import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeFranchiseComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeFranchiseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHomeFranchiseRoutingModule {}