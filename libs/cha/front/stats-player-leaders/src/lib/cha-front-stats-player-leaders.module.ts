import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontStatsPlayerPleadersRoutingModule } from './cha-front-stats-player-leaders-routing.module';

import { StatsPlayersLeadersComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontStatsPlayerPleadersRoutingModule],
  declarations: [StatsPlayersLeadersComponent],
})
export class ChaFrontStatsPlayerLeadersModule {}
