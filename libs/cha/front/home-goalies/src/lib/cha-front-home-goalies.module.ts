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
import { InputTextModule } from 'primeng/inputtext';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { HomeGoaliesEffects } from './+state/home-goalies.effects';
import { HomeGoaliesFacade } from './+state/home-goalies.facade';
import { reducer } from './+state/home-goalies.reducer';
import { HomeGoaliesService } from './services';

import { ChaFrontHomeGoaliesRoutingModule } from './cha-front-home-goalies-routing.module';

import { HomeGoaliesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontHomeGoaliesRoutingModule,
    PerfectScrollbarModule,
    InputTextModule,
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

    StoreModule.forFeature('home-goalies', reducer),
    EffectsModule.forFeature([HomeGoaliesEffects]),
  ],
  declarations: [HomeGoaliesComponent],
  providers: [HomeGoaliesService, HomeGoaliesFacade, HomeGoaliesEffects],
})
export class ChaFrontHomeGoaliesModule {}
