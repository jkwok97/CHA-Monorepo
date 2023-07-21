import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { HomePlayersFacade } from './+state/home-players.facade';
import { reducer } from './+state/home-players.reducer';
import { HomePlayersService } from './services';
import { HomePlayersEffects } from './+state/home-players.effects';

import { ChaFrontHomePlayersRoutingModule } from './cha-front-home-players-routing.module';

import { HomePlayersComponent } from './containers';
import {
  HomePlayersTableComponent,
  HomePlayersTableSidebarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomePlayersRoutingModule,
    NgScrollbarModule,
    InputTextModule,
    ProgressBarModule,
    TooltipModule,
    SidebarModule,
    AvatarModule,
    TableModule,
    ButtonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,

    StoreModule.forFeature('home-players', reducer),
    EffectsModule.forFeature([HomePlayersEffects]),
  ],
  declarations: [
    HomePlayersComponent,
    HomePlayersTableComponent,
    HomePlayersTableSidebarComponent,
  ],
  providers: [HomePlayersService, HomePlayersFacade, HomePlayersEffects],
})
export class ChaFrontHomePlayersModule {}
