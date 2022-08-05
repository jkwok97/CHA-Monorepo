import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollPanelModule } from 'primeng/scrollpanel';

import { LayoutComponent } from './containers';
import {
  LayoutFeatureComponent,
  LayoutFeatureContentComponent,
} from './components';

@NgModule({
  imports: [CommonModule, ScrollPanelModule],
  declarations: [
    LayoutComponent,
    LayoutFeatureComponent,
    LayoutFeatureContentComponent,
  ],
  exports: [
    LayoutComponent,
    LayoutFeatureComponent,
    LayoutFeatureContentComponent,
  ],
})
export class BladeAngularUiLayoutModule {}
