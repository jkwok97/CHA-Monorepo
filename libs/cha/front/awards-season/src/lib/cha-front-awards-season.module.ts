import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsSeasonRoutingModule } from './cha-front-awards-season-routing.module';

import { AwardsSeasonComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontAwardsSeasonRoutingModule],
  declarations: [AwardsSeasonComponent],
})
export class ChaFrontAwardsSeasonModule {}
