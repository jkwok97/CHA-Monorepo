import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LeagueWaiverssEffects } from './+state/league-waivers.effects';
import { LeagueWaiversFacade } from './+state/league-waivers.facade';
import { reducer } from './+state/league-waivers.reducer';
import { LeagueWaiversService } from './services';

import { ChaFrontLeagueWaiversRoutingModule } from './cha-front-league-waivers-routing.module';

import { LeagueWaiversComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontLeagueWaiversRoutingModule,
    StoreModule.forFeature('league-salaries-ratings', reducer),
    EffectsModule.forFeature([LeagueWaiverssEffects]),
  ],
  declarations: [LeagueWaiversComponent],
  providers: [LeagueWaiversService, LeagueWaiversFacade, LeagueWaiverssEffects],
})
export class ChaFrontLeagueWaiversModule {}
