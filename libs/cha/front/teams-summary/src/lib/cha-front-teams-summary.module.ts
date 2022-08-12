import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontTeamsSummaryRoutingModule } from './cha-front-teams-summary-routing.module';

import { TeamsSummaryComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontTeamsSummaryRoutingModule],
  declarations: [TeamsSummaryComponent],
})
export class ChaFrontTeamsSummaryModule {}
