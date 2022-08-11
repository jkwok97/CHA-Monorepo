import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontMainRulesRoutingModule } from './cha-front-main-rules-routing.module';

import { MainRulesComponent } from './containers';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

@NgModule({
  imports: [CommonModule, ChaFrontMainRulesRoutingModule, BladeAngularUiLayoutModule],
  declarations: [MainRulesComponent],
})
export class ChaFrontMainRulesModule {}
