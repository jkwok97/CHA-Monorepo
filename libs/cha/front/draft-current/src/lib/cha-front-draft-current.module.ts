import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
    StoreModule.forFeature('draft-current', reducer),
    EffectsModule.forFeature([DraftCurrentEffects]),
  ],
  declarations: [DraftCurrentComponent],
  providers: [DraftCurrentEffects, DraftCurrentFacade],
})
export class ChaFrontDraftCurrentModule {}
