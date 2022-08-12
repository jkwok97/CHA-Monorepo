import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontStatsTeamLeadersRoutingModule } from './cha-front-stats-team-leaders-routing.module';

import { StatsTeamLeadersComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontStatsTeamLeadersRoutingModule],
  declarations: [StatsTeamLeadersComponent],
})
export class ChaFrontStatsTeamLeadersModule {}
