import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontGamesPlayoffsRoutingModule } from './cha-front-games-playoffs-routing.module';

import { GamesPlayoffsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontGamesPlayoffsRoutingModule],
  declarations: [GamesPlayoffsComponent],
})
export class ChaFrontGamesPlayoffsModule {}
