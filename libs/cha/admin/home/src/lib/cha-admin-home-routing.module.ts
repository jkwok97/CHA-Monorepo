import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'league',
      },
      {
        path: 'league',
        loadChildren: () =>
          import('@cha/admin/main-league').then(
            (mod) => mod.ChaAdminMainLeagueModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminHomeRoutingModule {}
