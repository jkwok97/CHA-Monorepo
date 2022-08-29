import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { StatsTeamAllEffects } from './+state/stats-team-all.effects';
import { reducer } from './+state/stats-team-all.reducer';
import { StatsTeamAllFacade } from './+state/stats-team-all.facade';

import { ChaFrontStatsTeamAllRoutingModule } from './cha-front-stats-team-all-routing.module';

import { StatsTeamAllService } from './services';

import { StatsTeamAllComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsTeamAllRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,

    StoreModule.forFeature('stats-team-all', reducer),
    EffectsModule.forFeature([StatsTeamAllEffects]),
  ],
  declarations: [StatsTeamAllComponent],
  providers: [StatsTeamAllService, StatsTeamAllFacade, StatsTeamAllEffects],
})
export class ChaFrontStatsTeamAllModule {}
