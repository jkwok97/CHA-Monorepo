import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontGamesCurrentRoutingModule } from './cha-front-games-current-routing.module';

import { GamesCurrentComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontGamesCurrentRoutingModule],
  declarations: [GamesCurrentComponent],
})
export class ChaFrontGamesCurrentModule {}
