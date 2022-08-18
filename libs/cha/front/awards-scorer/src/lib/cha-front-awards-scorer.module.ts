import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAwardCardComponent } from '@blade/angular/ui/award-card';

import { ChaFrontAwardsScorerRoutingModule } from './cha-front-awards-scorer-routing.module';

import { AwardsScorerComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontAwardsScorerRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAwardCardComponent,
  ],
  declarations: [AwardsScorerComponent],
})
export class ChaFrontAwardsScorerModule {}
