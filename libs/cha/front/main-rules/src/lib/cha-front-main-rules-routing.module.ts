import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainRulesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainRulesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'equalization',
      },
      {
        path: 'equalization',
        loadChildren: () =>
          import('@cha/front/rules-equalization').then(
            (mod) => mod.ChaFrontRulesEqualizationModule
          ),
      },
      {
        path: 'lottery',
        loadChildren: () =>
          import('@cha/front/rules-lottery').then(
            (mod) => mod.ChaFrontRulesLotteryModule
          ),
      },
      {
        path: 'egr',
        loadChildren: () =>
          import('@cha/front/rules-egr').then(
            (mod) => mod.ChaFrontRulesEgrModule
          ),
      },
      //   {
      //     path: 'player-protection',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/rules-player-protection').then(
      //         (mod) => mod.ChaAngularFeaturesRulesPlayerProtectionModule
      //       ),
      //   },
      //   {
      //     path: 'rosters',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/rules-rosters').then(
      //         (mod) => mod.ChaAngularFeaturesRulesRostersModule
      //       ),
      //   },
      //   {
      //     path: 'waivers',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/rules-waivers').then(
      //         (mod) => mod.ChaAngularFeaturesRulesWaiversModule
      //       ),
      //   },
      //   {
      //     path: 'winnings',
      //     loadChildren: () =>
      //       import('@cha/cha-angular/features/rules-winnings').then(
      //         (mod) => mod.ChaAngularFeaturesRulesWinningsModule
      //       ),
      //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontMainRulesRoutingModule {}
