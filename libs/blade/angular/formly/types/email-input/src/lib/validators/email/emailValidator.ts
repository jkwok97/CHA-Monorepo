import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

const regex = /^\S+@\S+\.\S+$/;

export function EmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return regex.test(control.value) ? null : { email: true };
  };
}

export function EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid Email Address`;
}
