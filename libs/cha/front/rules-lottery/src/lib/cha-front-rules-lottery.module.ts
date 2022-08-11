import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { ChaFrontRulesLotteryRoutingModule } from './cha-front-rules-lottery-routing.module';

import { RulesLotteryComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontRulesLotteryRoutingModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
  ],
  declarations: [RulesLotteryComponent],
})
export class ChaFrontRulesLotteryModule {}
