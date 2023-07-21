import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { MainNhlComponent } from './containers';

import { ChaFrontMainNhlRoutingModule } from './cha-front-main-nhl-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontMainNhlRoutingModule,
    BladeAngularUiLayoutModule,
    NgScrollbarModule,
  ],
  declarations: [MainNhlComponent],
})
export class ChaFrontMainNhlModule {}
