import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { StatsPlayerAllEffects } from './+state/stats-player-all.effects';
import { StatsPlayerAllFacade } from './+state/stats-player-all.facade';
import { reducer } from './+state/stats-player-all.reducer';
import { StatsPlayerAllService } from './services';

import { ChaFrontStatsPlayerAllRoutingModule } from './cha-front-stats-player-all-routing.module';

import { StatsPlayerAllComponent } from './containers';
import {
  StatsPlayerAllTableComponent,
  StatsPlayerAllSidebarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontStatsPlayerAllRoutingModule,
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

    StoreModule.forFeature('stats-player-all', reducer),
    EffectsModule.forFeature([StatsPlayerAllEffects]),
  ],
  declarations: [
    StatsPlayerAllComponent,
    StatsPlayerAllTableComponent,
    StatsPlayerAllSidebarComponent,
  ],
  providers: [
    StatsPlayerAllService,
    StatsPlayerAllFacade,
    StatsPlayerAllEffects,
  ],
})
export class ChaFrontStatsPlayerAllModule {}
