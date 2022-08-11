import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaFrontRulesWinningsRoutingModule } from './cha-front-rules-winnings-routing.module';

import { RulesWinningsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    ChaFrontRulesWinningsRoutingModule,
  ],
  declarations: [RulesWinningsComponent],
})
export class ChaFrontRulesWinningsModule {}
