import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiTableModule } from '@blade/angular/ui/table';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { ProgressBarModule } from 'primeng/progressbar';

import { ChaFrontDraftSummaryRoutingModule } from './cha-front-draft-summary-routing.module';

import { DraftSummaryComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontDraftSummaryRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeAngularUiCardModule,
    BladeAngularUiTableModule,
  ],
  declarations: [DraftSummaryComponent],
})
export class ChaFrontDraftSummaryModule {}
