import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';

import { SingleSelectTypeComponent } from '@blade/angular/formly/types/single-select';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaAdminPlayerMgmtGoalieCurrentRoutingModule } from './cha-admin-player-mgmt-goalie-current-routing.module';

import { PlayerMgmtGoalieCurrentEffects } from './+state/player-mgmt-goalie-current.effects';
import { PlayerMgmtGoalieCurrentFacade } from './+state/player-mgmt-goalie-current.facade';
import { reducer } from './+state/player-mgmt-goalie-current.reducer';

import { PlayerMgmtGoalieCurrentComponent } from './containers';
import {
  PlayerMgmtGoalieCurrentTableComponent,
  PlayerMgmtGoalieCurrentEditComponent,
  PlayerMgmtGoalieCurrentEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgressBarModule,
    SidebarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminPlayerMgmtGoalieCurrentRoutingModule,
    StoreModule.forFeature('player-mgmt-goalie-current', reducer),
    EffectsModule.forFeature([PlayerMgmtGoalieCurrentEffects]),
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
    PlayerMgmtGoalieCurrentComponent,
    PlayerMgmtGoalieCurrentTableComponent,
    PlayerMgmtGoalieCurrentEditComponent,
    PlayerMgmtGoalieCurrentEditFormComponent,
  ],
  providers: [PlayerMgmtGoalieCurrentEffects, PlayerMgmtGoalieCurrentFacade],
})
export class ChaAdminPlayerMgmtGoalieCurrentModule {}
