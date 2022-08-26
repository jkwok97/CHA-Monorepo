import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeChaLeaderCardComponent } from '@blade/angular/ui/leader-card';

import { LeagueStatsPlayersEffects } from './containers/+state/stats-players-leaders.effects';
import { LeagueStatsPlayersFacade } from './containers/+state/stats-players-leaders.facade';
import { reducer } from './containers/+state/stats-players-leaders.reducer';
import { StatsPlayersLeadersService } from './services';

import { ChaFrontStatsPlayerPleadersRoutingModule } from './cha-front-stats-player-leaders-routing.module';

import { StatsPlayersLeadersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsPlayerPleadersRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeChaLeaderCardComponent,
    StoreModule.forFeature('league-stats-player', reducer),
    EffectsModule.forFeature([LeagueStatsPlayersEffects]),
  ],
  declarations: [StatsPlayersLeadersComponent],
  providers: [
    LeagueStatsPlayersEffects,
    LeagueStatsPlayersFacade,
    StatsPlayersLeadersService,
  ],
})
export class ChaFrontStatsPlayerLeadersModule {}
