import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontStatsTeamAllRoutingModule } from './cha-front-stats-team-all-routing.module';

import { StatsTeamAllComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontStatsTeamAllRoutingModule],
  declarations: [StatsTeamAllComponent],
})
export class ChaFrontStatsTeamAllModule {}
