import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlayerMgmtPlayerCurrentComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: PlayerMgmtPlayerCurrentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminPlayerMgmtPlayerCurrentRoutingModule {}
