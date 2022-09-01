import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GamesPlayoffsEffects } from './+state/games-playoffs.effects';
import { reducer } from './+state/games-playoffs.reducer';
import { GamesPlayoffsFacade } from './+state/games-playoffs.facade';
import { GamesPlayoffsService } from './services';

import { ChaFrontGamesPlayoffsRoutingModule } from './cha-front-games-playoffs-routing.module';

import { GamesPlayoffsComponent } from './containers';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontGamesPlayoffsRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    StoreModule.forFeature('games-playoffs', reducer),
    EffectsModule.forFeature([GamesPlayoffsEffects]),
  ],
  declarations: [GamesPlayoffsComponent],
  providers: [GamesPlayoffsService, GamesPlayoffsFacade, GamesPlayoffsEffects],
})
export class ChaFrontGamesPlayoffsModule {}
