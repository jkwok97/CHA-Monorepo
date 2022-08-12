import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaFrontHomeFranchiseRoutingModule } from './cha-front-home-franchise-routing.module';

import { HomeFranchiseComponent } from './containers';

@NgModule({
  imports: [CommonModule, ChaFrontHomeFranchiseRoutingModule],
  declarations: [HomeFranchiseComponent],
})
export class ChaFrontHomeFranchiseModule {}
