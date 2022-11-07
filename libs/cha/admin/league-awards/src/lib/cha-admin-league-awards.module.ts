import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LeagueAwardsEffects } from './+state/league-awards.effects';
import { LeagueAwardsFacade } from './+state/league-awards.facade';
import { reducer } from './+state/league-awards.reducer';

import { ChaAdminLeagueAwardsRoutingModule } from './cha-admin-league-awards-routing.module';

import { LeagueAwardsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueAwardsRoutingModule,
    StoreModule.forFeature('league-awards', reducer),
    EffectsModule.forFeature([LeagueAwardsEffects]),
  ],
  declarations: [LeagueAwardsComponent],
  providers: [LeagueAwardsEffects, LeagueAwardsFacade],
})
export class ChaAdminLeagueAwardsModule {}
