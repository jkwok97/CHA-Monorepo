import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlayerMgmtRatingsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: PlayerMgmtRatingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminPlayerMgmtRatingsRoutingModule {}
