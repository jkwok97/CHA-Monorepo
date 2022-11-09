import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaAdminLeagueConferencesRoutingModule } from './cha-admin-league-conferences-routing.module';
import { LeagueConferencesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminLeagueConferencesRoutingModule],
  declarations: [LeagueConferencesComponent],
})
export class ChaAdminLeagueConferencesModule {}
