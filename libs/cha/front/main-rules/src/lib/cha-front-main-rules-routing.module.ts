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
      {
        path: 'player-protection',
        loadChildren: () =>
          import('@cha/front/rules-player-protection').then(
            (mod) => mod.ChaFrontRulesPlayerProtectionModule
          ),
      },
      {
        path: 'rosters',
        loadChildren: () =>
          import('@cha/front/rules-rosters').then(
            (mod) => mod.ChaFrontRulesRostersModule
          ),
      },
      {
        path: 'waivers',
        loadChildren: () =>
          import('@cha/front/rules-waivers').then(
            (mod) => mod.ChaFrontRulesWaiversModule
          ),
      },
      {
        path: 'winnings',
        loadChildren: () =>
          import('@cha/front/rules-winnings').then(
            (mod) => mod.ChaFrontRulesWinningsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaFrontMainRulesRoutingModule {}
