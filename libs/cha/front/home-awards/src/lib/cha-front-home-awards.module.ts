import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHomeAwardsRoutingModule } from './cha-front-home-awards-routing.module';

import { HomeAwardsComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHomeAwardsRoutingModule],
  declarations: [HomeAwardsComponent],
})
export class ChaFrontHomeAwardsModule {}
