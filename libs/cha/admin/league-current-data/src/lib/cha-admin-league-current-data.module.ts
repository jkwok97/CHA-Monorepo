import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueCurrentDataComponent } from './containers';
import { ChaAdminLeagueCurrentDataRoutingModule } from './cha-admin-league-current-data-routing.module';

@NgModule({
  imports: [CommonModule, ChaAdminLeagueCurrentDataRoutingModule],
  declarations: [LeagueCurrentDataComponent],
})
export class ChaAdminLeagueCurrentDataModule {}
