import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { TextInputTypeComponent } from '@blade/angular/formly/types/text-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';

import { DraftMgmtEntryEffects } from './+state/draft-mgmt-entry.effects';
import { DraftMgmtEntryFacade } from './+state/draft-mgmt-entry.facade';
import { reducer } from './+state/draft-mgmt-entry.reducer';

import { ChaAdminDraftMgmtEntryRoutingModule } from './cha-admin-draft-mgmt-entry-routing.module';

import { DraftMgmtEntryComponent } from './containers';
import {
  DraftMgmtEntryTableComponent,
  DraftMgmtEntryEditComponent,
  DraftMgmtEntryEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChaAdminDraftMgmtEntryRoutingModule,
    PerfectScrollbarModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    StoreModule.forFeature('draft-mgmt-entry', reducer),
    EffectsModule.forFeature([DraftMgmtEntryEffects]),
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
    DraftMgmtEntryComponent,
    DraftMgmtEntryTableComponent,
    DraftMgmtEntryEditComponent,
    DraftMgmtEntryEditFormComponent,
  ],
  providers: [DraftMgmtEntryEffects, DraftMgmtEntryFacade],
})
export class ChaAdminDraftMgmtEntryModule {}
