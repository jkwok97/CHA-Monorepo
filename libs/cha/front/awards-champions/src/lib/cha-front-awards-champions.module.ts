import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsChampionsRoutingModule } from './cha-front-awards-champions-routing.module';

import { AwardsChampionsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontAwardsChampionsRoutingModule],
  declarations: [AwardsChampionsComponent],
})
export class ChaFrontAwardsChampionsModule {}
