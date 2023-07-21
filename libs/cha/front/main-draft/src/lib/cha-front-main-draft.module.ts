import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { MainDraftComponent } from './containers';

import { ChaFrontMainDraftRoutingModule } from './cha-front-main-draft-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainDraftRoutingModule,
    BladeAngularUiLayoutModule,
    NgScrollbarModule,
  ],
  declarations: [MainDraftComponent],
})
export class ChaFrontMainDraftModule {}
