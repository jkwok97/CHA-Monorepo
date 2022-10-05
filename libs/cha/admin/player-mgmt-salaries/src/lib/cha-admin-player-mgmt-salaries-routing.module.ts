import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PlayerMgmtSalariesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: PlayerMgmtSalariesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminPlayerMgmtSalariesRoutingModule {}
