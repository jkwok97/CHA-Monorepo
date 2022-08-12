import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsScorerRoutingModule } from './cha-front-awards-scorer-routing.module';

import { AwardsScorerComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontAwardsScorerRoutingModule],
  declarations: [AwardsScorerComponent],
})
export class ChaFrontAwardsScorerModule {}
