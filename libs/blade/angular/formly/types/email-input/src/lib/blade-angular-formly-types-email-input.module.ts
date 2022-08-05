import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './email-input/email-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  declarations: [EmailInputComponent],
  exports: [EmailInputComponent],
})
export class BladeAngularFormlyTypesEmailInputModule {}
