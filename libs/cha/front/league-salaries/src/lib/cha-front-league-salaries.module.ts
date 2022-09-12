import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
