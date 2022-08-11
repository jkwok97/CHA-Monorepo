import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaFrontRulesEqualizationRoutingModule } from './cha-front-rules-equalization-routing.module';

import { RulesEqualizationComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontRulesEqualizationRoutingModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
  ],
  declarations: [RulesEqualizationComponent],
})
export class ChaFrontRulesEqualizationModule {}
