import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueWaiversRoutingModule } from './cha-front-league-waivers-routing.module';

import { LeagueWaiversComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueWaiversRoutingModule],
  declarations: [LeagueWaiversComponent],
})
export class ChaFrontLeagueWaiversModule {}
