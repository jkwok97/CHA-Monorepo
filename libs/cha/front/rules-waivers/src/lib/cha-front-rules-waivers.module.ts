import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaFrontRulesWaiversRoutingModule } from './cha-front-rules-waivers-routing.module';

import { RulesWaiversComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    ChaFrontRulesWaiversRoutingModule,
  ],
  declarations: [RulesWaiversComponent],
})
export class ChaFrontRulesWaiversModule {}
