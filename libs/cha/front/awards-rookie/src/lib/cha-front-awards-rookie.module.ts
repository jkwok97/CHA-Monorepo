import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAwardCardComponent } from '@blade/angular/ui/award-card';

import { ChaFrontAwardsRookieRoutingModule } from './cha-front-awards-rookie-routing.module';

import { AwardsRookieComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontAwardsRookieRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAwardCardComponent,
  ],
  declarations: [AwardsRookieComponent],
})
export class ChaFrontAwardsRookieModule {}
