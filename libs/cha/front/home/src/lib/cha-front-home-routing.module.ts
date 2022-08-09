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
        redirectTo: 'summary',
      },
      {
        path: 'summary',
        loadChildren: () =>
          import('@cha/front/home-summary').then(
            (mod) => mod.ChaFrontHomeSummaryModule
          ),
      },
      {
        path: 'franchise',
        loadChildren: () =>
          import('@cha/front/home-franchise').then(
            (mod) => mod.ChaFrontHomeFranchiseModule
          ),
      },
      {
        path: 'awards',
        loadChildren: () =>
          import('@cha/front/home-awards').then(
            (mod) => mod.ChaFrontHomeAwardsModule
          ),
      },
      {
        path: 'current-goalies',
        loadChildren: () =>
          import('@cha/front/home-goalies').then(
            (mod) => mod.ChaFrontHomeGoaliesModule
          ),
      },
      {
        path: 'current-players',
        loadChildren: () =>
          import('@cha/front/home-players').then(
            (mod) => mod.ChaFrontHomePlayersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontHomeRoutingModule {}
