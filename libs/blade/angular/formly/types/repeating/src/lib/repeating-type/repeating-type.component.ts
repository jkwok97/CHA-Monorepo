import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'blade-repeating-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './repeating-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepeatingTypeComponent extends FieldArrayType {}
