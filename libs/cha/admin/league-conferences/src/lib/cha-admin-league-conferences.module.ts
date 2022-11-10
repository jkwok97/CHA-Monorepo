import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { ChaAdminLeagueConferencesRoutingModule } from './cha-admin-league-conferences-routing.module';

import { LeagueConferencesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueConferencesRoutingModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
  ],
  declarations: [LeagueConferencesComponent],
})
export class ChaAdminLeagueConferencesModule {}
