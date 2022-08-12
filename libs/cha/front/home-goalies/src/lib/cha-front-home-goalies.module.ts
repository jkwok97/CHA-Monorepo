import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHomeGoaliesRoutingModule } from './cha-front-home-goalies-routing.module';

import { HomeGoaliesComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHomeGoaliesRoutingModule],
  declarations: [HomeGoaliesComponent],
})
export class ChaFrontHomeGoaliesModule {}
