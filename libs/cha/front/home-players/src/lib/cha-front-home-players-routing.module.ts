import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomePlayersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomePlayersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHomePlayersRoutingModule {}