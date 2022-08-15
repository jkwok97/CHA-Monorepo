import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminLeagueUsersRoutingModule } from './cha-admin-league-users-routing.module';

import { LeagueUsersComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminLeagueUsersRoutingModule],
  declarations: [LeagueUsersComponent],
})
export class ChaAdminLeagueUsersModule {}
