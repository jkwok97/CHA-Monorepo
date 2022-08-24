import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ChaFrontNhlStatsRoutingModule } from './cha-front-nhl-stats-routing.module';

import { reducer } from './+state/nhl-stats.reducer';
import { NhlStatsEffects } from './+state/nhl-stats.effects';
import { NhlStatsFacade } from './+state/nhl-stats.facade';
import { NhlStatsService } from './services';

import { NhlStatsComponent } from './containers';
import {
  NhlStatsGoalieTableComponent,
  NhlStatsRookieTableComponent,
  NhlStatsSkaterTableComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontNhlStatsRoutingModule,
    TableModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeButtonSelectComponent,
    StoreModule.forFeature('nhl-stats', reducer),
    EffectsModule.forFeature([NhlStatsEffects]),
  ],
  declarations: [
    NhlStatsComponent,
    NhlStatsGoalieTableComponent,
    NhlStatsRookieTableComponent,
    NhlStatsSkaterTableComponent,
  ],
  providers: [NhlStatsEffects, NhlStatsFacade, NhlStatsService],
})
export class ChaFrontNhlStatsModule {}
