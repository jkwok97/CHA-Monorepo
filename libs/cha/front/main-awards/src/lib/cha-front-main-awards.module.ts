import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ChaFrontMainAwardsRoutingModule } from './cha-front-main-awards-routing.module';

import { MainAwardsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainAwardsRoutingModule,
    BladeAngularUiLayoutModule,
    PerfectScrollbarModule,
  ],
  declarations: [MainAwardsComponent],
})
export class ChaFrontMainAwardsModule {}
