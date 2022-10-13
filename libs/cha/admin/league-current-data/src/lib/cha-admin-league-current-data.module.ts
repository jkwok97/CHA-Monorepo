import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeDividerComponent } from '@blade/angular/ui/divider';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { ChaAdminLeagueCurrentDataRoutingModule } from './cha-admin-league-current-data-routing.module';

import { LeagueCurrentDataComponent } from './containers';
import {
  LeagueCurrentDataEditComponent,
  LeagueCurrentDataEditFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueCurrentDataRoutingModule,
    ProgressBarModule,
    BladeAngularUiLayoutModule,
    BladeDividerComponent,
    BladeAngularUiCardModule,
  ],
  declarations: [
    LeagueCurrentDataComponent,
    LeagueCurrentDataEditComponent,
    LeagueCurrentDataEditFormComponent,
  ],
})
export class ChaAdminLeagueCurrentDataModule {}
