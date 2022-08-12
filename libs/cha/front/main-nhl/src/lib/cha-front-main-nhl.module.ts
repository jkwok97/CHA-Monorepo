import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MainNhlComponent } from './containers';

import { ChaFrontMainNhlRoutingModule } from './cha-front-main-nhl-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainNhlRoutingModule,
    BladeAngularUiLayoutModule,
    PerfectScrollbarModule,
  ],
  declarations: [MainNhlComponent],
})
export class ChaFrontMainNhlModule {}
