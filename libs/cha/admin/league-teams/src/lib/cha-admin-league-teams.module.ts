import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminLeagueTeamsRoutingModule } from './cha-admin-league-teams-routing.module';

import { LeagueTeamsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminLeagueTeamsRoutingModule],
  declarations: [LeagueTeamsComponent],
})
export class ChaAdminLeagueTeamsModule {}
