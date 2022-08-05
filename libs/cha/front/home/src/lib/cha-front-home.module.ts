import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHomeRoutingModule } from './cha-front-home-routing.module';

import { HomeComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHomeRoutingModule],
  declarations: [HomeComponent],
})
export class ChaFrontHomeModule {}
