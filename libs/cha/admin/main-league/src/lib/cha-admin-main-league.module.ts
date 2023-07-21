import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgScrollbarModule } from 'ngx-scrollbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaAdminMainLeagueRoutingModule } from './cha-admin-main-league-routing.module';

import { MainLeagueComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminMainLeagueRoutingModule,
    NgScrollbarModule,
    BladeAngularUiLayoutModule,
  ],
  declarations: [MainLeagueComponent],
})
export class ChaAdminMainLeagueModule {}
