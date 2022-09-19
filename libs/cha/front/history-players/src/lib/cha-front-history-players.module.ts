import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { HistoryPlayersEffects } from './+state/history-players.effects';
import { HistoryPlayersFacade } from './+state/history-players.facade';
import { reducer } from './+state/history-players.reducer';
import { HistoryPlayersService } from './services';

import { ChaFrontHistoryPlayersRoutingModule } from './cha-front-history-players-routing.module';

import { HistoryPlayersComponent } from './containers';
import {
  HistoryPlayersTableComponent,
  HistoryPlayersAllSidebarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHistoryPlayersRoutingModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    AvatarModule,
    SidebarModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,
    BladeAngularUiCardModule,
    StoreModule.forFeature('history-players', reducer),
    EffectsModule.forFeature([HistoryPlayersEffects]),
  ],
  declarations: [
    HistoryPlayersComponent,
    HistoryPlayersTableComponent,
    HistoryPlayersAllSidebarComponent,
  ],
  providers: [
    HistoryPlayersService,
    HistoryPlayersFacade,
    HistoryPlayersEffects,
  ],
})
export class ChaFrontHistoryPlayersModule {}
