import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { InputNumberModule } from 'primeng/inputnumber';


@Component({
  selector: 'blade-number-input-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputNumberModule],
  templateUrl: './number-input-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputTypeComponent extends FieldType<FieldTypeConfig> {}
