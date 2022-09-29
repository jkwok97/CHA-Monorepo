import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'blade-checkbox-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, CheckboxModule],
  templateUrl: './checkbox-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxTypeComponent extends FieldType<FieldTypeConfig> {}
