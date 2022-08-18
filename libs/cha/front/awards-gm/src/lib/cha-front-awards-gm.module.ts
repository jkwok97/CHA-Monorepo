import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAwardCardComponent } from '@blade/angular/ui/award-card';

import { ChaFrontAwardsGmRoutingModule } from './cha-front-awards-gm-routing.module';

import { AwardsGmComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontAwardsGmRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAwardCardComponent,
  ],
  declarations: [AwardsGmComponent],
})
export class ChaFrontAwardsGmModule {}
