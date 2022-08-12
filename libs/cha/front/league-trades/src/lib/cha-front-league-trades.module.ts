import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueTradesRoutingModule } from './cha-front-league-trades-routing.module';

import { LeagueTradesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueTradesRoutingModule],
  declarations: [LeagueTradesComponent],
})
export class ChaFrontLeagueTradesModule {}
