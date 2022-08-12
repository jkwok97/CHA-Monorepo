import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueHistoryRoutingModule } from './cha-front-league-history-routing.module';

import { LeagueHistoryComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueHistoryRoutingModule],
  declarations: [LeagueHistoryComponent],
})
export class ChaFrontLeagueHistoryModule {}
