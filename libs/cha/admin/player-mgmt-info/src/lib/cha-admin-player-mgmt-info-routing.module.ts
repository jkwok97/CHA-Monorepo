import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  PlayerMgmtInfoAllComponent,
  PlayerMgmtInfoAddComponent,
  PlayerMgmtInfoAddInfoComponent,
  PlayerMgmtInfoAddSalaryComponent,
} from './components';
import { PlayerMgmtInfoComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: PlayerMgmtInfoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all',
      },
      {
        path: 'all',
        component: PlayerMgmtInfoAllComponent,
      },
      {
        path: 'add',
        component: PlayerMgmtInfoAddComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'info',
          },
          {
            path: 'info',
            component: PlayerMgmtInfoAddInfoComponent,
          },
          {
            path: 'salary',
            component: PlayerMgmtInfoAddSalaryComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminPlayerMgmtInfoRoutingModule {}
