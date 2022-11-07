import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueAwardsEffects } from './+state/league-awards.effects';
import { LeagueAwardsFacade } from './+state/league-awards.facade';
import { reducer } from './+state/league-awards.reducer';

import { ChaAdminLeagueAwardsRoutingModule } from './cha-admin-league-awards-routing.module';

import { LeagueAwardsComponent } from './containers';
import {
  LeagueAwardsTableComponent,
  LeagueAwardsEditComponent,
  LeagueAwardsEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    ChaAdminLeagueAwardsRoutingModule,
    StoreModule.forFeature('league-awards', reducer),
    EffectsModule.forFeature([LeagueAwardsEffects]),
  ],
  declarations: [
    LeagueAwardsComponent,
    LeagueAwardsTableComponent,
    LeagueAwardsEditComponent,
    LeagueAwardsEditFormComponent,
  ],
  providers: [LeagueAwardsEffects, LeagueAwardsFacade],
})
export class ChaAdminLeagueAwardsModule {}
