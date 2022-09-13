import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueWaiverssEffects } from './+state/league-waivers.effects';
import { LeagueWaiversFacade } from './+state/league-waivers.facade';
import { reducer } from './+state/league-waivers.reducer';
import { LeagueWaiversService } from './services';

import { ChaFrontLeagueWaiversRoutingModule } from './cha-front-league-waivers-routing.module';

import { LeagueWaiversComponent } from './containers';

import { LeagueWaiversTableComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontLeagueWaiversRoutingModule,
    ProgressBarModule,
    TableModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    StoreModule.forFeature('league-waivers', reducer),
    EffectsModule.forFeature([LeagueWaiverssEffects]),
  ],
  declarations: [LeagueWaiversComponent, LeagueWaiversTableComponent],
  providers: [LeagueWaiversService, LeagueWaiversFacade, LeagueWaiverssEffects],
})
export class ChaFrontLeagueWaiversModule {}
