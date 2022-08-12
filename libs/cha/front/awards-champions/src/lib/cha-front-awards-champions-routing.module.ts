import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AwardsChampionsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: AwardsChampionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontAwardsChampionsRoutingModule {}