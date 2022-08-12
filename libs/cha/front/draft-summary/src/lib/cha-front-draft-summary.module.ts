import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontDraftSummaryRoutingModule } from './cha-front-draft-summary-routing.module';

import { DraftSummaryComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontDraftSummaryRoutingModule],
  declarations: [DraftSummaryComponent],
})
export class ChaFrontDraftSummaryModule {}
