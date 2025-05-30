import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiTableModule } from '@blade/angular/ui/table';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';

import { ChaFrontDraftCurrentRoutingModule } from './cha-front-draft-current-routing.module';

import { reducer } from './+state/draft-current.reducer';
import { DraftCurrentEffects } from './+state/draft-current.effects';
import { DraftCurrentFacade } from './+state/draft-current.facade';

import { DraftCurrentComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontDraftCurrentRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeAngularUiTableModule,
    BladeDividerComponent,
    BladeButtonSelectComponent,
    StoreModule.forFeature('draft-current', reducer),
    EffectsModule.forFeature([DraftCurrentEffects]),
  ],
  declarations: [DraftCurrentComponent],
  providers: [DraftCurrentEffects, DraftCurrentFacade],
})
export class ChaFrontDraftCurrentModule {}
