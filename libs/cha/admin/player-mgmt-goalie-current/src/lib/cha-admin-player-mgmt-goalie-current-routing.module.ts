import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlayerMgmtGoalieCurrentComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: PlayerMgmtGoalieCurrentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminPlayerMgmtGoalieCurrentRoutingModule {}