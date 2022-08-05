import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './containers';

import {
  CardBodyComponent,
  CardFooterComponent,
  CardHeaderComponent,
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
  ],
})
export class BladeAngularUiCardModule {}
