import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlayerMgmtInfoComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: PlayerMgmtInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminPlayerMgmtInfoRoutingModule {}