import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHistoryPlayersRoutingModule } from './cha-front-history-players-routing.module';

import { HistoryPlayersComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHistoryPlayersRoutingModule],
  declarations: [HistoryPlayersComponent],
})
export class ChaFrontHistoryPlayersModule {}
