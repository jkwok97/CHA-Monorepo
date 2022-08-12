import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsDefenseRoutingModule } from './cha-front-awards-defense-routing.module';

import { AwardsDefenseComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontAwardsDefenseRoutingModule],
  declarations: [AwardsDefenseComponent],
})
export class ChaFrontAwardsDefenseModule {}
