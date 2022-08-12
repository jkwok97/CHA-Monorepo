import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainNhlComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainNhlComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'leaders',
      },
      {
        path: 'leaders',
        loadChildren: () =>
          import('@cha/front/nhl-leaders').then(
            (mod) => mod.ChaFrontNhlLeadersModule
          ),
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('@cha/front/nhl-stats').then(
            (mod) => mod.ChaFrontNhlStatsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontMainNhlRoutingModule {}
