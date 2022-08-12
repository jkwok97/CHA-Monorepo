import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsRookieRoutingModule } from './cha-front-awards-rookie-routing.module';

import { AwardsRookieComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontAwardsRookieRoutingModule],
  declarations: [AwardsRookieComponent],
})
export class ChaFrontAwardsRookieModule {}
