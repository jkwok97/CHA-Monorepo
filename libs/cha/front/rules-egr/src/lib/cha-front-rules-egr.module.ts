import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaFrontRulesEgrRoutingModule } from './cha-front-rules-egr-routing.module';

import { RulesEgrComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    ChaFrontRulesEgrRoutingModule,
  ],
  declarations: [RulesEgrComponent],
})
export class ChaFrontRulesEgrModule {}
