import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontDraftCurrentRoutingModule } from './cha-front-draft-current-routing.module';

import { DraftCurrentComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontDraftCurrentRoutingModule],
  declarations: [DraftCurrentComponent],
})
export class ChaFrontDraftCurrentModule {}
