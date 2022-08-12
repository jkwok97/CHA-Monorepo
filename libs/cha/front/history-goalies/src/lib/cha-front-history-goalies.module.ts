import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHistoryGoaliesRoutingModule } from './cha-front-history-goalies-routing.module';

import { HistoryGoaliesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHistoryGoaliesRoutingModule],
  declarations: [HistoryGoaliesComponent],
})
export class ChaFrontHistoryGoaliesModule {}
