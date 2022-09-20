import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaFrontHomeFranchiseRoutingModule } from './cha-front-home-franchise-routing.module';

import { HomeFranchiseComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeFranchiseRoutingModule,
    PerfectScrollbarModule,
    BladeAngularUiLayoutModule,
  ],
  declarations: [HomeFranchiseComponent],
})
export class ChaFrontHomeFranchiseModule {}
