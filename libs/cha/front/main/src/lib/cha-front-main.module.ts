import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontMainRoutingModule } from './cha-front-main-routing.module';

import { MainResolver } from './resolvers';

import { MainComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontMainRoutingModule],
  declarations: [MainComponent],
  providers: [MainResolver],
})
export class ChaFrontMainModule {}
