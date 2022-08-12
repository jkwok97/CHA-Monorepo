import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueRatingsRoutingModule } from './cha-front-league-ratings-routing.module';

import { LeagueRatingsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueRatingsRoutingModule],
  declarations: [LeagueRatingsComponent],
})
export class ChaFrontLeagueRatingsModule {}
