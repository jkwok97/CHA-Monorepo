import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ConferenceDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-league-conferences-edit-form',
  templateUrl: './league-conferences-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueConferencesEditFormComponent implements OnInit {
  @Input() conference!: ConferenceDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit(): void {
    if (this.conference) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [this.isActiveField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [this.nameField()],
      },
    ];
  }

  patchForm() {
    this.model = {
      isactive: this.conference?.isactive,
      conferencename: this.conference?.conferencename,
    };
  }

  isActiveField(): FormlyFieldConfig {
    return {
      key: 'isactive',
      className: 'w-5',
      type: 'checkbox',
      templateOptions: {
        label: 'Active Conference',
      },
    };
  }

  nameField(): FormlyFieldConfig {
    return {
      key: 'conferencename',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Conference Name',
        placeholder: 'Enter name',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'name is required',
        },
      },
    };
  }
}
