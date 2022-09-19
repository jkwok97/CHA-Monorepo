import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { StatsGoalieAllEffects } from './+state/stats-goalie-all.effects';
import { reducer } from './+state/stats-goalie-all.reducer';
import { StatsGoalieAllService } from './services';
import { StatsGoalieAllFacade } from './+state/stats-goalie-all.facade';

import { ChaFrontStatsGoalieAllRoutingModule } from './cha-front-stats-goalie-all-routing.module';

import { StatsGoalieAllComponent } from './containers';
import {
  StatsGoalieAllTableComponent,
  StatsGoalieAllSidebarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsGoalieAllRoutingModule,
    ProgressBarModule,
    InputTextModule,
    TableModule,
    AvatarModule,
    SidebarModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,
    BladeAngularUiCardModule,

    StoreModule.forFeature('stats-goalie-all', reducer),
    EffectsModule.forFeature([StatsGoalieAllEffects]),
  ],
  declarations: [
    StatsGoalieAllComponent,
    StatsGoalieAllTableComponent,
    StatsGoalieAllSidebarComponent,
  ],
  providers: [
    StatsGoalieAllService,
    StatsGoalieAllFacade,
    StatsGoalieAllEffects,
  ],
})
export class ChaFrontStatsGoalieAllModule {}
