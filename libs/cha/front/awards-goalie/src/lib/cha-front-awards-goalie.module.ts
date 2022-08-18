import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAwardCardComponent } from '@blade/angular/ui/award-card';

import { ChaFrontAwardsGoalieRoutingModule } from './cha-front-awards-goalie-routing.module';

import { AwardsGoalieComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontAwardsGoalieRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAwardCardComponent,
  ],
  declarations: [AwardsGoalieComponent],
})
export class ChaFrontAwardsGoalieModule {}
