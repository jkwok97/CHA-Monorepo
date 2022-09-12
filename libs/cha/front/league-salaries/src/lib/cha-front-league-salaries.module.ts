import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';

import { reducer } from './+state/league-salaries-ratings.reducer';
import { LeagueSalariesAndRatingsService } from './services';
import { LeagueSalariesAndRatingsFacade } from './+state/league-salaries-ratings.facade';
import { LeagueSalariesAndRatingsEffects } from './+state/league-salaries-ratings.effects';

import { ChaFrontLeagueSalariesRoutingModule } from './cha-front-league-salaries-routing.module';

import { LeagueSalariesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontLeagueSalariesRoutingModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeButtonSelectComponent,
    StoreModule.forFeature('league-salaries-ratings', reducer),
    EffectsModule.forFeature([LeagueSalariesAndRatingsEffects]),
  ],
  declarations: [LeagueSalariesComponent],
  providers: [
    LeagueSalariesAndRatingsService,
    LeagueSalariesAndRatingsFacade,
    LeagueSalariesAndRatingsEffects,
  ],
})
export class ChaFrontLeagueSalariesModule {}
