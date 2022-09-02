import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontGamesUpcomingRoutingModule } from './cha-front-games-upcoming-routing.module';

import { GamesUpcomingComponent } from './containers';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontGamesUpcomingRoutingModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
  ],
  declarations: [GamesUpcomingComponent],
})
export class ChaFrontGamesUpcomingModule {}
