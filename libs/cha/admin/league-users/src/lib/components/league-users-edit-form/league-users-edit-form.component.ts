import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Form, UntypedFormGroup } from '@angular/forms';
import { EmailValidatorMessage } from '@blade/angular/formly/types/email-input';
import { UserDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-league-users-edit-form',
  templateUrl: './league-users-edit-form.component.html',
  styleUrls: ['./league-users-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersEditFormComponent implements OnInit {
  @Input() user!: UserDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
      fieldGroup: [
        this.firstNameField(),
        this.lastNameField(),
        this.emailField(),
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
    if (this.user) {
      this.patchForm();
    }
  }

  patchForm() {
    this.model = {
      firstname: this.user?.firstname,
      lastname: this.user?.lastname,
      email: this.user?.email,
    };
  }

  firstNameField(): FormlyFieldConfig {
    return {
      key: 'firstname',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'First Name',
        placeholder: 'Enter First Name',
      },
    };
  }

  lastNameField(): FormlyFieldConfig {
    return {
      key: 'lastname',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Enter Last Name',
      },
    };
  }

  emailField(): FormlyFieldConfig {
    return {
      key: 'email',
      className: 'w-full md:w-3',
      type: 'email-input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter Email',
      },
    };
  }
}
