import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { HomeFranchiseEffects } from './+state/home-franchise.effects';
import { HomeFranchiseFacade } from './+state/home-franchise.facade';
import { reducer } from './+state/home-franchise.reducer';
import { HomeFranchiseService } from './services';

import { ChaFrontHomeFranchiseRoutingModule } from './cha-front-home-franchise-routing.module';

import { HomeFranchiseComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeFranchiseRoutingModule,
    PerfectScrollbarModule,
    ProgressBarModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,

    StoreModule.forFeature('home-franchise', reducer),
    EffectsModule.forFeature([HomeFranchiseEffects]),
  ],
  declarations: [HomeFranchiseComponent],
  providers: [HomeFranchiseService, HomeFranchiseFacade, HomeFranchiseEffects],
})
export class ChaFrontHomeFranchiseModule {}
