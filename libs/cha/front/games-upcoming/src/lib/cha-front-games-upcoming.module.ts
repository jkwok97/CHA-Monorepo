import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontGamesUpcomingRoutingModule } from './cha-front-games-upcoming-routing.module';

import { GamesUpcomingComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontGamesUpcomingRoutingModule],
  declarations: [GamesUpcomingComponent],
})
export class ChaFrontGamesUpcomingModule {}
