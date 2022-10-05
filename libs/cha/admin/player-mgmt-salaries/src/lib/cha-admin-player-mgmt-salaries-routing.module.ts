import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  PlayerMgmtSalariesAddComponent,
  PlayerMgmtSalariesAllComponent,
} from './components';
import { PlayerMgmtSalariesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: PlayerMgmtSalariesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all',
      },
      {
        path: 'all',
        component: PlayerMgmtSalariesAllComponent,
      },
      {
        path: 'add',
        component: PlayerMgmtSalariesAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminPlayerMgmtSalariesRoutingModule {}
