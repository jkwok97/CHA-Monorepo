import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontNhlLeadersRoutingModule } from './cha-front-nhl-leaders-routing.module';

import { NhlLeadersComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontNhlLeadersRoutingModule],
  declarations: [NhlLeadersComponent],
})
export class ChaFrontNhlLeadersModule {}
