import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontAwardsChampionsRoutingModule } from './cha-front-awards-champions-routing.module';

import { ProgressBarModule } from 'primeng/progressbar';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAwardCardComponent } from '@blade/angular/ui/award-card';

import { AwardsChampionsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontAwardsChampionsRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAwardCardComponent,
  ],
  declarations: [AwardsChampionsComponent],
})
export class ChaFrontAwardsChampionsModule {}
