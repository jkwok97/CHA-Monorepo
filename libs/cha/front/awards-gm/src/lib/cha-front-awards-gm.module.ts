import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsGmRoutingModule } from './cha-front-awards-gm-routing.module';

import { AwardsGmComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontAwardsGmRoutingModule],
  declarations: [AwardsGmComponent],
})
export class ChaFrontAwardsGmModule {}
