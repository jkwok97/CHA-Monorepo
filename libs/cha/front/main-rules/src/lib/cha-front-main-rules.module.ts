import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { ChaFrontMainRulesRoutingModule } from './cha-front-main-rules-routing.module';

import { MainRulesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainRulesRoutingModule,
    BladeAngularUiLayoutModule,
    NgScrollbarModule,
  ],
  declarations: [MainRulesComponent],
})
export class ChaFrontMainRulesModule {}
