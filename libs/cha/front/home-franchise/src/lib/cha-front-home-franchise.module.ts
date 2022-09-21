import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

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
import {
  HomeFranchiseTableComponent,
  HomeFranchiseTableSidebarComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeFranchiseRoutingModule,
    PerfectScrollbarModule,
    ProgressBarModule,
    TooltipModule,
    SidebarModule,
    AvatarModule,
    TableModule,
    ButtonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeButtonSelectComponent,
    BladeDividerComponent,

    StoreModule.forFeature('home-franchise', reducer),
    EffectsModule.forFeature([HomeFranchiseEffects]),
  ],
  declarations: [
    HomeFranchiseComponent,
    HomeFranchiseTableComponent,
    HomeFranchiseTableSidebarComponent,
  ],
  providers: [HomeFranchiseService, HomeFranchiseFacade, HomeFranchiseEffects],
})
export class ChaFrontHomeFranchiseModule {}
