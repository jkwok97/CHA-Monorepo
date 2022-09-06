import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueTradesFacade } from './+state/league-trades.facade';
import { LeagueTradesService } from './services';
import { LeagueTradesEffects } from './+state/league-trades.effects';
import { reducer } from './+state/league-trades.reducer';

import { ChaFrontLeagueTradesRoutingModule } from './cha-front-league-trades-routing.module';

import { LeagueTradesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontLeagueTradesRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    StoreModule.forFeature('league-trades', reducer),
    EffectsModule.forFeature([LeagueTradesEffects]),
  ],
  declarations: [LeagueTradesComponent],
  providers: [LeagueTradesService, LeagueTradesFacade, LeagueTradesEffects],
})
export class ChaFrontLeagueTradesModule {}
