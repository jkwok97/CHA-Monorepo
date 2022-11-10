import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';
import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeDividerComponent } from '@blade/angular/ui/divider';

import { ChaAdminLeagueDivisionsRoutingModule } from './cha-admin-league-divisions-routing.module';

import { LeagueDivisionsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ChaAdminLeagueDivisionsRoutingModule,
    BladeAngularUiLayoutModule,
    BladeAngularUiCardModule,
    BladeDividerComponent,
  ],
  declarations: [LeagueDivisionsComponent],
})
export class ChaAdminLeagueDivisionsModule {}
