import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueStatsRoutingModule } from './cha-front-league-stats-routing.module';

import { LeagueStatsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueStatsRoutingModule],
  declarations: [LeagueStatsComponent],
})
export class ChaFrontLeagueStatsModule {}
