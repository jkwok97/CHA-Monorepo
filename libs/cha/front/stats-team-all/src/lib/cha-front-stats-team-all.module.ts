import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { StatsTeamAllEffects } from './+state/stats-team-all.effects';
import { reducer } from './+state/stats-team-all.reducer';
import { StatsTeamAllFacade } from './+state/stats-team-all.facade';

import { ChaFrontStatsTeamAllRoutingModule } from './cha-front-stats-team-all-routing.module';

import { StatsTeamAllService } from './services';

import { StatsTeamAllComponent } from './containers';
import { StatsTeamAllTableComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsTeamAllRoutingModule,
    ProgressBarModule,
    TableModule,
    AvatarModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,
    BladeAngularUiCardModule,

    StoreModule.forFeature('stats-team-all', reducer),
    EffectsModule.forFeature([StatsTeamAllEffects]),
  ],
  declarations: [StatsTeamAllComponent, StatsTeamAllTableComponent],
  providers: [StatsTeamAllService, StatsTeamAllFacade, StatsTeamAllEffects],
})
export class ChaFrontStatsTeamAllModule {}
