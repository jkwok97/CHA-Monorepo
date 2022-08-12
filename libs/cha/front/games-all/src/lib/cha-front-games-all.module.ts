import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontGamesAllRoutingModule } from './cha-front-games-all-routing.module';

import { GamesAllComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontGamesAllRoutingModule],
  declarations: [GamesAllComponent],
})
export class ChaFrontGamesAllModule {}
