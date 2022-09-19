import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { HistoryGoaliesEffects } from './+state/history-goalies.effects';
import { HistoryGoaliesFacade } from './+state/history-goalies.facade';
import { reducer } from './+state/history-goalies.reducer';
import { HistoryGoaliesService } from './services';

import { ChaFrontHistoryGoaliesRoutingModule } from './cha-front-history-goalies-routing.module';

import { HistoryGoaliesComponent } from './containers';
import {
  HistoryGoaliesTableComponent,
  HistoryGoalieSidebarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHistoryGoaliesRoutingModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,
    BladeAngularUiCardModule,
    StoreModule.forFeature('history-goalies', reducer),
    EffectsModule.forFeature([HistoryGoaliesEffects]),
  ],
  declarations: [
    HistoryGoaliesComponent,
    HistoryGoaliesTableComponent,
    HistoryGoalieSidebarComponent,
  ],
  providers: [
    HistoryGoaliesService,
    HistoryGoaliesFacade,
    HistoryGoaliesEffects,
  ],
})
export class ChaFrontHistoryGoaliesModule {}
