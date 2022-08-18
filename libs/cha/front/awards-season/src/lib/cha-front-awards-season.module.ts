import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAwardCardComponent } from '@blade/angular/ui/award-card';

import { ChaFrontAwardsSeasonRoutingModule } from './cha-front-awards-season-routing.module';

import { AwardsSeasonComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontAwardsSeasonRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAwardCardComponent,
  ],
  declarations: [AwardsSeasonComponent],
})
export class ChaFrontAwardsSeasonModule {}
