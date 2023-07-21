import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { ChaFrontMainAwardsRoutingModule } from './cha-front-main-awards-routing.module';

import { MainAwardsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainAwardsRoutingModule,
    BladeAngularUiLayoutModule,
    NgScrollbarModule,
  ],
  declarations: [MainAwardsComponent],
})
export class ChaFrontMainAwardsModule {}
