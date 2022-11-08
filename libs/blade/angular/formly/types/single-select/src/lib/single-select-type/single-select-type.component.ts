import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'blade-single-select-type',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormlySelectModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
  templateUrl: './single-select-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleSelectTypeComponent extends FieldType<FieldTypeConfig> {
  override defaultOptions = {
    templateOptions: {
      placeholder: 'Select an option',
      options: [],
      showClear: false,
      readonly: false,
    },
  };
}
