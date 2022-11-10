import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { GetDivisionDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { LeagueDivisionsFacade } from '../../+state/league-divisions.facade';

@Component({
  selector: 'cha-admin-league-divisions-edit-form',
  templateUrl: './league-divisions-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsEditFormComponent implements OnInit {
  @Input() division!: GetDivisionDto | null;

  conferences$: Observable<any[]>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(private leagueDivisionsFacade: LeagueDivisionsFacade) {
    this.conferences$ = this.leagueDivisionsFacade.conferenceOptions$;

    this.leagueDivisionsFacade.getConferences();
  }

  ngOnInit(): void {
    if (this.division) {
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
        fieldGroup: [this.nameField(), this.conferencesField()],
      },
    ];
  }

  patchForm() {
    this.model = {
      isactive: this.division?.isactive,
      divisionname: this.division?.divisionname,
      conference_id: this.division?.conference_id.id,
    };
  }

  isActiveField(): FormlyFieldConfig {
    return {
      key: 'isactive',
      className: 'w-5',
      type: 'checkbox',
      templateOptions: {
        label: 'Active Division',
      },
    };
  }

  nameField(): FormlyFieldConfig {
    return {
      key: 'divisionname',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Division Name',
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

  conferencesField(): FormlyFieldConfig {
    return {
      key: 'conference_id',
      className: 'w-full md:w-2',
      type: 'single-select',
      templateOptions: {
        label: 'Conference',
        placeholder: 'Select Conference',
        required: true,
        options: this.conferences$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Conference is required',
        },
      },
    };
  }
}
