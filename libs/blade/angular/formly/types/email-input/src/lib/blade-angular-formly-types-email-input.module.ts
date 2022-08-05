import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './email-input/email-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmailInputComponent],
  exports: [
    EmailInputComponent
  ]
})
export class BladeAngularFormlyTypesEmailInputModule {}
