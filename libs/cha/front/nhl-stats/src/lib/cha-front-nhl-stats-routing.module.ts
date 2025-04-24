import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NhlStatsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: NhlStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontNhlStatsRoutingModule {}
