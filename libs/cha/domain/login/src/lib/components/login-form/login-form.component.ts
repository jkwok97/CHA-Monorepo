import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { EmailValidatorMessage } from '@blade/angular/formly/types/email-input';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'cha-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'email-input',
      templateOptions: {
        label: 'Email',
        placeholder: 'john.doe@email.com',
        required: true,
      },
      modelOptions: {
        updateOn: 'change',
      },
      validators: {
        validation: ['email'],
      },
      validation: {
        messages: {
          required: 'Email is required',
          email: EmailValidatorMessage,
        },
      },
    },
  ];
}
