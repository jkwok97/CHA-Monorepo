import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

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
    ChaAdminDraftMgmtEntryRoutingModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    StoreModule.forFeature('draft-mgmt-entry', reducer),
    EffectsModule.forFeature([DraftMgmtEntryEffects]),
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
