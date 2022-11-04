import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { GamesCurrentEffects } from './+state/games-current.effects';
import { GamesCurrentFacade } from './+state/games-current.facade';
import { reducer } from './+state/games-current.reducer';
import { GamesCurrentService } from './services';

import { ChaFrontGamesCurrentRoutingModule } from './cha-front-games-current-routing.module';

import { GamesCurrentComponent } from './containers';
import {
  GamesCurrentTeamCardComponent,
  GamesCurrentMatchupComponent,
  GamesCurrentDayComponent,
  GamesCurrentBoxScoreComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontGamesCurrentRoutingModule,
    ProgressBarModule,
    AvatarModule,
    SidebarModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,

    StoreModule.forFeature('games-current', reducer),
    EffectsModule.forFeature([GamesCurrentEffects]),
  ],
  declarations: [
    GamesCurrentComponent,
    GamesCurrentTeamCardComponent,
    GamesCurrentMatchupComponent,
    GamesCurrentDayComponent,
    GamesCurrentBoxScoreComponent,
  ],
  providers: [GamesCurrentService, GamesCurrentFacade, GamesCurrentEffects],
})
export class ChaFrontGamesCurrentModule {}
