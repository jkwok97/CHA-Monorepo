import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { LeagueDivisionsEffects } from './+state/league-divisions.effects';
import { LeagueDivisionsFacade } from './+state/league-divisions.facade';
import { reducer } from './+state/league-divisions.reducer';

import { ChaAdminLeagueDivisionsRoutingModule } from './cha-admin-league-divisions-routing.module';

import { LeagueDivisionsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueDivisionsRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    StoreModule.forFeature('league-divisions', reducer),
    EffectsModule.forFeature([LeagueDivisionsEffects]),
  ],
  declarations: [LeagueDivisionsComponent],
  providers: [LeagueDivisionsEffects, LeagueDivisionsFacade],
})
export class ChaAdminLeagueDivisionsModule {}
