import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ChaFrontMainLeagueRoutingModule } from './cha-front-main-league-routing.module';

import { MainLeagueComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    BladeAngularUiLayoutModule,
    PerfectScrollbarModule,
    ChaFrontMainLeagueRoutingModule,
  ],
  declarations: [MainLeagueComponent],
})
export class ChaFrontMainLeagueModule {}
