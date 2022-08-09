import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './containers';
import { MainResolver } from './resolvers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
        resolve: [MainResolver],
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@cha/front/home').then((mod) => mod.ChaFrontHomeModule),
      },
      {
        path: 'league',
        loadChildren: () =>
          import('@cha/front/main-league').then(
            (mod) => mod.ChaFrontMainLeagueModule
          ),
      },
      {
        path: 'nhl',
        loadChildren: () =>
          import('@cha/front/main-nhl').then(
            (mod) => mod.ChaFrontMainNhlModule
          ),
      },
      {
        path: 'draft',
        loadChildren: () =>
          import('@cha/front/main-draft').then(
            (mod) => mod.ChaFrontMainDraftModule
          ),
      },
      {
        path: 'awards',
        loadChildren: () =>
          import('@cha/front/main-awards').then(
            (mod) => mod.ChaFrontMainAwardsModule
          ),
      },
      {
        path: 'rules',
        loadChildren: () =>
          import('@cha/front/main-rules').then(
            (mod) => mod.ChaFrontMainRulesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontMainRoutingModule {}
