import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { GamesPlayoffsEffects } from './+state/games-playoffs.effects';
import { reducer } from './+state/games-playoffs.reducer';
import { GamesPlayoffsFacade } from './+state/games-playoffs.facade';
import { GamesPlayoffsService } from './services';

import { ChaFrontGamesPlayoffsRoutingModule } from './cha-front-games-playoffs-routing.module';

import { GamesPlayoffsComponent } from './containers';

import {
  GamesPlayoffsMatchupCardComponent,
  GamesPlayoffsMatchupFinalCardComponent,
  GamesPlayoffsFinalChampionCardComponent,
  GamesPlayoffsTeamAvatarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontGamesPlayoffsRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    StoreModule.forFeature('games-playoffs', reducer),
    EffectsModule.forFeature([GamesPlayoffsEffects]),
  ],
  declarations: [
    GamesPlayoffsComponent,
    GamesPlayoffsMatchupCardComponent,
    GamesPlayoffsMatchupFinalCardComponent,
    GamesPlayoffsFinalChampionCardComponent,
    GamesPlayoffsTeamAvatarComponent,
  ],
  providers: [GamesPlayoffsService, GamesPlayoffsFacade, GamesPlayoffsEffects],
})
export class ChaFrontGamesPlayoffsModule {}
