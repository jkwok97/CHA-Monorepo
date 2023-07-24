import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';

import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { SingleSelectTypeComponent } from '@blade/angular/formly/types/single-select';

import { PlayerMgmtPlayerCurrentEffects } from './+state/player-mgmt-player-current.effects';
import { PlayerMgmtPlayerCurrentFacade } from './+state/player-mgmt-player-current.facade';
import { reducer } from './+state/player-mgmt-player-current.reducer';

import { ChaAdminPlayerMgmtPlayerCurrentRoutingModule } from './cha-admin-player-mgmt-player-current-routing.module';

import { PlayerMgmtPlayerCurrentComponent } from './containers';
import {
  PlayerMgmtPlayerCurrentTableComponent,
  PlayerMgmtPlayerCurrentEditComponent,
  PlayerMgmtPlayerCurrentEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgressBarModule,
    DialogModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminPlayerMgmtPlayerCurrentRoutingModule,
    StoreModule.forFeature('player-mgmt-player-current', reducer),
    EffectsModule.forFeature([PlayerMgmtPlayerCurrentEffects]),
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
        {
          name: 'single-select',
          component: SingleSelectTypeComponent,
          wrappers: ['control-wrapper'],
        },
      ],
    }),
  ],
  declarations: [
    PlayerMgmtPlayerCurrentComponent,
    PlayerMgmtPlayerCurrentTableComponent,
    PlayerMgmtPlayerCurrentEditComponent,
    PlayerMgmtPlayerCurrentEditFormComponent,
  ],
  providers: [PlayerMgmtPlayerCurrentEffects, PlayerMgmtPlayerCurrentFacade],
})
export class ChaAdminPlayerMgmtPlayerCurrentModule {}
