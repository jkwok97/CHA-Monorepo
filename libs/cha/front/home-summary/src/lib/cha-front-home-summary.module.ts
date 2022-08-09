import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHomeRoutingModule } from './cha-front-home-summary-routing.module';

import { HomeSummaryComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHomeRoutingModule],
  declarations: [HomeSummaryComponent],
})
export class ChaFrontHomeSummaryModule {}
