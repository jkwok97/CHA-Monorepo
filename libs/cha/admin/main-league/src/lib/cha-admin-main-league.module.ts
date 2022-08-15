import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaAdminMainLeagueRoutingModule } from './cha-admin-main-league-routing.module';

import { MainLeagueComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaAdminMainLeagueRoutingModule],
  declarations: [MainLeagueComponent],
})
export class ChaAdminMainLeagueModule {}
