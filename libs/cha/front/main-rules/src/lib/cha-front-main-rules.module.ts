import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ChaFrontMainRulesRoutingModule } from './cha-front-main-rules-routing.module';

import { MainRulesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainRulesRoutingModule,
    BladeAngularUiLayoutModule,
    PerfectScrollbarModule,
  ],
  declarations: [MainRulesComponent],
})
export class ChaFrontMainRulesModule {}
