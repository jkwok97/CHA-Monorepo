import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';

import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeButtonSelectComponent } from '@blade/angular/ui/button-select';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';

import { PlayerMgmtRatingsFacade } from './+state/player-mgmt-ratings.facade';
import { reducer } from './+state/player-mgmt-ratings.reducer';
import { PlayerMgmtRatingsEffects } from './+state/player-mgmt-ratings.effects';

import { ChaAdminPlayerMgmtRatingsRoutingModule } from './cha-admin-player-mgmt-ratings-routing.module';

import { PlayerMgmtRatingsComponent } from './containers';
import {
  PlayerMgmtRatingsPlayerTableComponent,
  PlayerMgmtRatingsGoalieTableComponent,
  PlayerMgmtRatingsGoalieEditComponent,
  PlayerMgmtRatingsPlayerEditComponent,
  PlayerMgmtRatingsPlayerEditFormComponent,
  PlayerMgmtRatingsGoalieEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgressBarModule,
    DialogModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeButtonSelectComponent,
    ChaAdminPlayerMgmtRatingsRoutingModule,
    StoreModule.forFeature('player-mgmt-ratings', reducer),
    EffectsModule.forFeature([PlayerMgmtRatingsEffects]),
    FormlyModule.forRoot({
      wrappers: [
        {
          name: 'control-wrapper',
          component: DefaultFormFieldWrapperComponent,
        },
      ],
      types: [
        {
          name: 'text-input',
          component: TextInputTypeComponent,
          wrappers: ['control-wrapper'],
        },
      ],
    }),
  ],
  declarations: [
    PlayerMgmtRatingsComponent,
    PlayerMgmtRatingsPlayerTableComponent,
    PlayerMgmtRatingsGoalieTableComponent,
    PlayerMgmtRatingsGoalieEditComponent,
    PlayerMgmtRatingsPlayerEditComponent,
    PlayerMgmtRatingsPlayerEditFormComponent,
    PlayerMgmtRatingsGoalieEditFormComponent,
  ],
  providers: [PlayerMgmtRatingsEffects, PlayerMgmtRatingsFacade],
})
export class ChaAdminPlayerMgmtRatingsModule {}
