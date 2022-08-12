import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainAwardsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainAwardsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'champions',
      },
      {
        path: 'champions',
        loadChildren: () =>
          import('@cha/front/awards-champions').then(
            (mod) => mod.ChaFrontAwardsChampionsModule
          ),
      },
      {
        path: 'scorer',
        loadChildren: () =>
          import('@cha/front/awards-scorer').then(
            (mod) => mod.ChaFrontAwardsScorerModule
          ),
      },
      {
        path: 'defense',
        loadChildren: () =>
          import('@cha/front/awards-defense').then(
            (mod) => mod.ChaFrontAwardsDefenseModule
          ),
      },
      {
        path: 'rookie',
        loadChildren: () =>
          import('@cha/front/awards-rookie').then(
            (mod) => mod.ChaFrontAwardsRookieModule
          ),
      },
      {
        path: 'goalie',
        loadChildren: () =>
          import('@cha/front/awards-goalie').then(
            (mod) => mod.ChaFrontAwardsGoalieModule
          ),
      },
      {
        path: 'gm',
        loadChildren: () =>
          import('@cha/front/awards-gm').then(
            (mod) => mod.ChaFrontAwardsGmModule
          ),
      },
      //   {
      //     path: 'season',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/awards-season').then(
      //         (mod) => mod.ChaAngularFeaturesAwardsSeasonModule
      //       ),
      //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontMainAwardsRoutingModule {}
