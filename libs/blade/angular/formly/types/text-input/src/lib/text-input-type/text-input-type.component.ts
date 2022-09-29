import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'blade-text-input-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputTextModule],
  templateUrl: './text-input-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputTypeComponent extends FieldType<FieldTypeConfig> {}
