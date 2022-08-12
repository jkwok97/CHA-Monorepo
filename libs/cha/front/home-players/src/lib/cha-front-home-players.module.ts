import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHomePlayersRoutingModule } from './cha-front-home-players-routing.module';

import { HomePlayersComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHomePlayersRoutingModule],
  declarations: [HomePlayersComponent],
})
export class ChaFrontHomePlayersModule {}
