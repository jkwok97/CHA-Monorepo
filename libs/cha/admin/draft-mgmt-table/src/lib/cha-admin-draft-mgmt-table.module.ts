import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { DraftMgmtTableEffects } from './+state/draft-mgmt-table.effects';
import { DraftMgmtTableFacade } from './+state/draft-mgmt-table.facade';
import { reducer } from './+state/draft-mgmt-table.reducer';

import { ChaAdminDraftMgmtTableRoutingModule } from './cha-admin-draft-mgmt-table-routing.module';

import { DraftMgmtTableComponent } from './containers';
import {
  DraftMgmtTableTableComponent,
  DraftMgmtTableEditComponent,
  DraftMgmtTableEditFormComponent,
} from './components';
import { SingleSelectTypeComponent } from '@blade/angular/formly/types/single-select';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminDraftMgmtTableRoutingModule,
    StoreModule.forFeature('draft-mgmt-table', reducer),
    EffectsModule.forFeature([DraftMgmtTableEffects]),
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
    DraftMgmtTableComponent,
    DraftMgmtTableTableComponent,
    DraftMgmtTableEditComponent,
    DraftMgmtTableEditFormComponent,
  ],
  providers: [DraftMgmtTableEffects, DraftMgmtTableFacade],
})
export class ChaAdminDraftMgmtTableModule {}
