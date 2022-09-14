import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HistoryTeamsEffects } from './+state/history-teams.effects';
import { HistoryTeamsFacade } from './+state/history-teams.facade';
import { reducer } from './+state/history-teams.reducer';
import { HistoryTeamsService } from './services';

import { ChaFrontHistoryTeamsRoutingModule } from './cha-front-history-teams-routing.module';

import { HistoryTeamsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHistoryTeamsRoutingModule,
    StoreModule.forFeature('history-teams', reducer),
    EffectsModule.forFeature([HistoryTeamsEffects]),
  ],
  declarations: [HistoryTeamsComponent],
  providers: [HistoryTeamsService, HistoryTeamsFacade, HistoryTeamsEffects],
})
export class ChaFrontHistoryTeamsModule {}
