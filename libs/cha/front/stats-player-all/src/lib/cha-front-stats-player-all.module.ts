import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontStatsPlayerAllRoutingModule } from './cha-front-stats-player-all-routing.module';

import { StatsPlayerAllComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontStatsPlayerAllRoutingModule],
  declarations: [StatsPlayerAllComponent],
})
export class ChaFrontStatsPlayerAllModule {}
