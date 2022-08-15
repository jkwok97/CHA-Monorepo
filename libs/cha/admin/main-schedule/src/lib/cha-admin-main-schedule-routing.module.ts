import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainScheduleComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainScheduleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'games',
      },
      {
        path: 'games',
        loadChildren: () =>
          import('@cha/admin/schedule-games').then(
            (mod) => mod.ChaAdminScheduleGamesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminMainScheduleRoutingModule {}
