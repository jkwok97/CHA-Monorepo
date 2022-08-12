import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontNhlStatsRoutingModule } from './cha-front-nhl-stats-routing.module';

import { NhlStatsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontNhlStatsRoutingModule],
  declarations: [NhlStatsComponent],
})
export class ChaFrontNhlStatsModule {}
