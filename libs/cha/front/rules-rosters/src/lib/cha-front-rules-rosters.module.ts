import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaFrontRulesRostersRoutingModule } from './cha-front-rules-rosters-routing.module';

import { RulesRostersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontRulesRostersRoutingModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
  ],
  declarations: [RulesRostersComponent],
})
export class ChaFrontRulesRostersModule {}
