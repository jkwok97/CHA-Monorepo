import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { GamesAllEffects } from './+state/games-all.effects';
import { GamesAllFacade } from './+state/games-all.facade';
import { reducer } from './+state/games-all.reducer';
import { GamesAllService } from './services';

import { ChaFrontGamesAllRoutingModule } from './cha-front-games-all-routing.module';

import { GamesAllComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontGamesAllRoutingModule,
    ProgressBarModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    StoreModule.forFeature('games-all', reducer),
    EffectsModule.forFeature([GamesAllEffects]),
  ],
  declarations: [GamesAllComponent],
  providers: [GamesAllService, GamesAllFacade, GamesAllEffects],
})
export class ChaFrontGamesAllModule {}
