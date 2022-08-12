import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsGoalieRoutingModule } from './cha-front-awards-goalie-routing.module';

import { AwardsGoalieComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontAwardsGoalieRoutingModule],
  declarations: [AwardsGoalieComponent],
})
export class ChaFrontAwardsGoalieModule {}
