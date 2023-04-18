import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeChaLeaderCardComponent } from '@blade/angular/ui/leader-card';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LeagueStatsGoaliesEffects } from './+state/stats-goalie-leader.effects';
import { LeagueStatsGoaliesFacade } from './+state/stats-goalie-leader.facade';
import { reducer } from './+state/stats-goalie-leader.reducer';

import { ChaFrontStatsGoalieLeadersRoutingModule } from './cha-front-stats-goalie-leaders-routing.module';

import { StatsGoalieLeadersComponent } from './containers';
import { StatsGoalieLeadersService } from './services';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsGoalieLeadersRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeChaLeaderCardComponent,
    BladeButtonSelectComponent,
    StoreModule.forFeature('league-stats-goalie', reducer),
    EffectsModule.forFeature([LeagueStatsGoaliesEffects]),
  ],
  declarations: [StatsGoalieLeadersComponent],
  providers: [
    StatsGoalieLeadersService,
    LeagueStatsGoaliesEffects,
    LeagueStatsGoaliesFacade,
  ],
})
export class ChaFrontStatsGoalieLeadersModule {}
