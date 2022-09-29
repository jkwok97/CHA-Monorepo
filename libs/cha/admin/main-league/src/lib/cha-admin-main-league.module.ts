import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaAdminMainLeagueRoutingModule } from './cha-admin-main-league-routing.module';

import { MainLeagueComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminMainLeagueRoutingModule,
    PerfectScrollbarModule,
    BladeAngularUiLayoutModule,
  ],
  declarations: [MainLeagueComponent],
})
export class ChaAdminMainLeagueModule {}
