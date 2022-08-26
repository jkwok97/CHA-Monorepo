import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueStatsTeamEffects } from './+state/stats-team-leaders.effects';
import { LeagueStatsTeamFacade } from './+state/stats-team-leaders.facade';
import { reducer } from './+state/stats-team-leaders.reducer';
import { StatsTeamLeadersService } from './services';

import { ChaFrontStatsTeamLeadersRoutingModule } from './cha-front-stats-team-leaders-routing.module';

import { StatsTeamLeadersComponent } from './containers';
import { StatsTeamLeadersDifferentialsComponent } from './components/stats-team-leaders-differentials/stats-team-leaders-differentials.component';
import { StatsTeamLeadersPenaltiesComponent } from './components/stats-team-leaders-penalties/stats-team-leaders-penalties.component';
import { StatsTeamLeadersPkComponent } from './components/stats-team-leaders-pk/stats-team-leaders-pk.component';
import { StatsTeamLeadersPpComponent } from './components/stats-team-leaders-pp/stats-team-leaders-pp.component';
import { StatsTeamLeadersStandingsComponent } from './components/stats-team-leaders-standings/stats-team-leaders-standings.component';
import { StatsTeamLeadersStreakComponent } from './components/stats-team-leaders-streak/stats-team-leaders-streak.component';
import { StatsTeamLeadersTableComponent } from './components/stats-team-leaders-table/stats-team-leaders-table.component';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsTeamLeadersRoutingModule,

    ProgressBarModule,
    AccordionModule,
    TableModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,

    StoreModule.forFeature('league-stats-team', reducer),
    EffectsModule.forFeature([LeagueStatsTeamEffects]),
  ],
  declarations: [
    StatsTeamLeadersComponent,
    StatsTeamLeadersDifferentialsComponent,
    StatsTeamLeadersPenaltiesComponent,
    StatsTeamLeadersPkComponent,
    StatsTeamLeadersPpComponent,
    StatsTeamLeadersStandingsComponent,
    StatsTeamLeadersStreakComponent,
    StatsTeamLeadersTableComponent,
  ],
  providers: [
    LeagueStatsTeamEffects,
    LeagueStatsTeamFacade,
    StatsTeamLeadersService,
  ],
})
export class ChaFrontStatsTeamLeadersModule {}
