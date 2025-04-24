import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AngularSvgIconModule } from 'angular-svg-icon';

import {
  MultiLevelMenuComponent,
  MultiLevelMenuFooterComponent,
  MultiLevelMenuItemComponent,
  MultiLevelMainMenuComponent
} from './components';
import { Button, ButtonDirective } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { HasRelatedActiveRoutePipe } from './utils';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CdkOverlayOrigin,
    ButtonDirective,
    Button,
    DividerModule,
    AngularSvgIconModule
  ],
  declarations: [
    MultiLevelMenuComponent,
    MultiLevelMenuFooterComponent,
    MultiLevelMenuItemComponent,
    MultiLevelMainMenuComponent,
    HasRelatedActiveRoutePipe
  ],
  exports: [MultiLevelMenuComponent]
})
export class BladeAngularUiMultiLevelMenuModule {}
