import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueUsersFacade } from './+state/league-users.facade';
import { LeagueUsersEffects } from './+state/league-users.effects';
import { reducer } from './+state/league-users.reducer';

import { ChaAdminLeagueUsersRoutingModule } from './cha-admin-league-users-routing.module';

import { LeagueUsersComponent } from './containers';
import { LeagueUsersTableComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminLeagueUsersRoutingModule,
    StoreModule.forFeature('league-users', reducer),
    EffectsModule.forFeature([LeagueUsersEffects]),
  ],
  declarations: [LeagueUsersComponent, LeagueUsersTableComponent],
  providers: [LeagueUsersEffects, LeagueUsersFacade],
})
export class ChaAdminLeagueUsersModule {}
