import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'blade-default-form-field-wrapper',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './default-form-field-wrapper.component.html',
  styleUrls: ['./default-form-field-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultFormFieldWrapperComponent extends FieldWrapper {
  constructor() {
    super();
  }
}
