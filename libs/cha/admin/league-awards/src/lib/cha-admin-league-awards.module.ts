import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminLeagueAwardsRoutingModule } from './cha-admin-league-awards-routing.module';

import { LeagueAwardsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminLeagueAwardsRoutingModule],
  declarations: [LeagueAwardsComponent],
})
export class ChaAdminLeagueAwardsModule {}
