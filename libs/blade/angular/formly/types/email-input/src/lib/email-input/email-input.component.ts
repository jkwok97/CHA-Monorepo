import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'blade-email-input',
  templateUrl: './email-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailInputComponent extends FieldType<FieldTypeConfig> {}
