import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontStatsGoalieLeadersRoutingModule } from './cha-front-stats-goalie-leaders-routing.module';

import { StatsGoalieLeadersComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontStatsGoalieLeadersRoutingModule],
  declarations: [StatsGoalieLeadersComponent],
})
export class ChaFrontStatsGoalieLeadersModule {}
