import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProgressBarModule } from 'primeng/progressbar';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeNhlLeaderCardComponent } from '@blade/angular/ui/leader-card';

import { reducer } from './+state/nhl-leaders.reducer';
import { NhlLeadersEffects } from './+state/nhl-leaders.effects';
import { NhlLeadersFacade } from './+state/nhl-leaders.facade';
import { NhlLeadersService } from './services';

import { ChaFrontNhlLeadersRoutingModule } from './cha-front-nhl-leaders-routing.module';

import { NhlLeadersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaFrontNhlLeadersRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeNhlLeaderCardComponent,

    StoreModule.forFeature('nhl-leaders', reducer),
    EffectsModule.forFeature([NhlLeadersEffects]),
  ],
  declarations: [NhlLeadersComponent],
  providers: [NhlLeadersEffects, NhlLeadersFacade, NhlLeadersService],
})
export class ChaFrontNhlLeadersModule {}
