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

import { StatsPlayerAllEffects } from './+state/stats-player-all.effects';
import { StatsPlayerAllFacade } from './+state/stats-player-all.facade';
import { reducer } from './+state/stats-player-all.reducer';
import { StatsPlayerAllService } from './services';

import { ChaFrontStatsPlayerAllRoutingModule } from './cha-front-stats-player-all-routing.module';

import { StatsPlayerAllComponent } from './containers';
import { StatsPlayerAllTableComponent } from './components/stats-player-all-table/stats-player-all-table.component';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsPlayerAllRoutingModule,
    ProgressBarModule,
    TableModule,
    AvatarModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,

    StoreModule.forFeature('stats-player-all', reducer),
    EffectsModule.forFeature([StatsPlayerAllEffects]),
  ],
  declarations: [StatsPlayerAllComponent, StatsPlayerAllTableComponent],
  providers: [
    StatsPlayerAllService,
    StatsPlayerAllFacade,
    StatsPlayerAllEffects,
  ],
})
export class ChaFrontStatsPlayerAllModule {}
