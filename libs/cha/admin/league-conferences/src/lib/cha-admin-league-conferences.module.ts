import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueConferencesEffects } from './+state/league-conferences.effects';
import { reducer } from './+state/league-conferences.reducer';
import { LeagueConferencesFacade } from './+state/league-conferences.facade';

import { ChaAdminLeagueConferencesRoutingModule } from './cha-admin-league-conferences-routing.module';

import { LeagueConferencesComponent } from './containers';
import {
  LeagueConferencesTableComponent,
  LeagueConferencesEditComponent,
  LeagueConferencesEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueConferencesRoutingModule,
    ProgressBarModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    StoreModule.forFeature('league-conferences', reducer),
    EffectsModule.forFeature([LeagueConferencesEffects]),
  ],
  declarations: [
    LeagueConferencesComponent,
    LeagueConferencesTableComponent,
    LeagueConferencesEditComponent,
    LeagueConferencesEditFormComponent,
  ],
  providers: [LeagueConferencesEffects, LeagueConferencesFacade],
})
export class ChaAdminLeagueConferencesModule {}
