import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MainDraftComponent } from './containers';

import { ChaFrontMainDraftRoutingModule } from './cha-front-main-draft-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainDraftRoutingModule,
    BladeAngularUiLayoutModule,
    PerfectScrollbarModule,
  ],
  declarations: [MainDraftComponent],
})
export class ChaFrontMainDraftModule {}
