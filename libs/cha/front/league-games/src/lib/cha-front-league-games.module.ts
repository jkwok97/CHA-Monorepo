import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueGamesRoutingModule } from './cha-front-league-games-routing.module';

import { LeagueGamesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueGamesRoutingModule],
  declarations: [LeagueGamesComponent],
})
export class ChaFrontLeagueGamesModule {}
