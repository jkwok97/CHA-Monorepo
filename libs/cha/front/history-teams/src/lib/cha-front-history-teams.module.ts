import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { HistoryTeamsEffects } from './+state/history-teams.effects';
import { HistoryTeamsFacade } from './+state/history-teams.facade';
import { reducer } from './+state/history-teams.reducer';
import { HistoryTeamsService } from './services';

import { ChaFrontHistoryTeamsRoutingModule } from './cha-front-history-teams-routing.module';

import { HistoryTeamsComponent } from './containers';
import {
  HistoryTeamsTableComponent,
  HistoryTeamsTableSidebarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHistoryTeamsRoutingModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    AvatarModule,
    SidebarModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,
    BladeAngularUiCardModule,
    StoreModule.forFeature('history-teams', reducer),
    EffectsModule.forFeature([HistoryTeamsEffects]),
  ],
  declarations: [
    HistoryTeamsComponent,
    HistoryTeamsTableComponent,
    HistoryTeamsTableSidebarComponent,
  ],
  providers: [HistoryTeamsService, HistoryTeamsFacade, HistoryTeamsEffects],
})
export class ChaFrontHistoryTeamsModule {}
