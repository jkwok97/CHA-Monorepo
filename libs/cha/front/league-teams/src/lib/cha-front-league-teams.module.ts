import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontLeagueTeamsRoutingModule } from './cha-front-league-teams-routing.module';

import { LeagueTeamsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontLeagueTeamsRoutingModule],
  declarations: [LeagueTeamsComponent],
})
export class ChaFrontLeagueTeamsModule {}
