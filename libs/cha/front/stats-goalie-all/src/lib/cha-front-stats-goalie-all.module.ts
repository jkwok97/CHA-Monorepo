import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontStatsGoalieAllRoutingModule } from './cha-front-stats-goalie-all-routing.module';

import { StatsGoalieAllComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontStatsGoalieAllRoutingModule],
  declarations: [StatsGoalieAllComponent],
})
export class ChaFrontStatsGoalieAllModule {}
