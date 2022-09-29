import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'blade-radio-type',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlySelectModule,
    RadioButtonModule,
  ],
  templateUrl: './radio-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioTypeComponent extends FieldType<FieldTypeConfig> {}
