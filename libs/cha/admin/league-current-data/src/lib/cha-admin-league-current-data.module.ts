import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LeagueCurrentDataFacade } from './+state/league-current-data.facade';
import { reducer } from './+state/league-current-data.reducer';
import { LeagueCurrentDataEffects } from './+state/league-current-data.effects';

import { ChaAdminLeagueCurrentDataRoutingModule } from './cha-admin-league-current-data-routing.module';

import { LeagueCurrentDataComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueCurrentDataRoutingModule,
    StoreModule.forFeature('league-current-data', reducer),
    EffectsModule.forFeature([LeagueCurrentDataEffects]),
  ],
  declarations: [LeagueCurrentDataComponent],
  providers: [LeagueCurrentDataEffects, LeagueCurrentDataFacade],
})
export class ChaAdminLeagueCurrentDataModule {}
