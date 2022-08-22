import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiTableModule } from '@blade/angular/ui/table';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { ProgressBarModule } from 'primeng/progressbar';

import { ChaFrontDraftSummaryRoutingModule } from './cha-front-draft-summary-routing.module';
import { reducer } from './+state/draft-summary.reducer';
import { DraftSummaryEffects } from './+state/draft-summary.effects';
import { DraftSummaryFacade } from './+state/draft-summary.facade';

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

    StoreModule.forFeature('draft-summary', reducer),
    EffectsModule.forFeature([DraftSummaryEffects]),
  ],
  declarations: [DraftSummaryComponent],
  providers: [DraftSummaryEffects, DraftSummaryFacade],
})
export class ChaFrontDraftSummaryModule {}
