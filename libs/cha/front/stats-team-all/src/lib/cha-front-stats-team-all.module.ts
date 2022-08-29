import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontStatsTeamAllRoutingModule } from './cha-front-stats-team-all-routing.module';

import { StatsTeamAllComponent } from './containers';
import { StatsTeamAllService } from './services';

@NgModule({
  imports: [CommonModule, ChaFrontStatsTeamAllRoutingModule],
  declarations: [StatsTeamAllComponent],
  providers: [StatsTeamAllService],
})
export class ChaFrontStatsTeamAllModule {}
