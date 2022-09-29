import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LeagueUsersFacade } from './+state/league-users.facade';
import { LeagueUsersEffects } from './+state/league-users.effects';
import { reducer } from './+state/league-users.reducer';

import { ChaAdminLeagueUsersRoutingModule } from './cha-admin-league-users-routing.module';

import { LeagueUsersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueUsersRoutingModule,
    StoreModule.forFeature('league-users', reducer),
    EffectsModule.forFeature([LeagueUsersEffects]),
  ],
  declarations: [LeagueUsersComponent],
  providers: [LeagueUsersEffects, LeagueUsersFacade],
})
export class ChaAdminLeagueUsersModule {}
