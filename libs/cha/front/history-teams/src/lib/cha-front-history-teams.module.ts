import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHistoryTeamsRoutingModule } from './cha-front-history-teams-routing.module';

import { HistoryTeamsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHistoryTeamsRoutingModule],
  declarations: [HistoryTeamsComponent],
})
export class ChaFrontHistoryTeamsModule {}
