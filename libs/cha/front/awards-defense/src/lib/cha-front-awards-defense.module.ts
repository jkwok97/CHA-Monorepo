import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAwardCardComponent } from '@blade/angular/ui/award-card';

import { ChaFrontAwardsDefenseRoutingModule } from './cha-front-awards-defense-routing.module';

import { AwardsDefenseComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontAwardsDefenseRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAwardCardComponent,
  ],
  declarations: [AwardsDefenseComponent],
})
export class ChaFrontAwardsDefenseModule {}
