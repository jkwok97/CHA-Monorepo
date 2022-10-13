import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminLeagueCurrentDataRoutingModule } from './cha-admin-league-current-data-routing.module';

import { LeagueCurrentDataComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueCurrentDataRoutingModule,
  ],
  declarations: [LeagueCurrentDataComponent],
})
export class ChaAdminLeagueCurrentDataModule {}
