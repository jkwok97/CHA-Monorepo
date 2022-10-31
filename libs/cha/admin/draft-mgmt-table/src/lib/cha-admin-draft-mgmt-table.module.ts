import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

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

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
    ChaAdminDraftMgmtTableRoutingModule,
    StoreModule.forFeature('draft-mgmt-table', reducer),
    EffectsModule.forFeature([DraftMgmtTableEffects]),
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
