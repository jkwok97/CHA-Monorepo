import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { LeagueDataFacade } from '@cha/domain/core';
import { DraftTableDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-admin-draft-mgmt-table-edit-form',
  templateUrl: './draft-mgmt-table-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtTableEditFormComponent implements OnInit {
  @Input() draftTableItem!: DraftTableDto | null;

  teamOptions$: Observable<any>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(private leagueDataFacade: LeagueDataFacade) {
    this.teamOptions$ = this.leagueDataFacade.leagueTeamsOptionsById$;
  }

  ngOnInit(): void {
    if (this.draftTableItem) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [this.teamField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.roundOneField(),
          this.roundTwoField(),
          this.roundThreeField(),
          this.roundFourField(),
          this.roundFiveField(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      team: `${this.draftTableItem?.team_id.city} ${this.draftTableItem?.team_id.nickname}`,
      round_one: this.draftTableItem?.round_one,
      round_two: this.draftTableItem?.round_two,
      round_three: this.draftTableItem?.round_three,
      round_four: this.draftTableItem?.round_four,
      round_five: this.draftTableItem?.round_five,
    };
  }

  teamField(): FormlyFieldConfig {
    return {
      key: 'team',
      className: 'w-full md:w-4',
      type: 'text-input',
      templateOptions: {
        label: 'Team',
        readonly: true,
      },
    };
  }

  roundOneField(): FormlyFieldConfig {
    return {
      key: 'round_one',
      className: 'w-full md:w-2',
      type: 'single-select',
      templateOptions: {
        label: 'Round One',
        placeholder: 'Select Team',
        required: true,
        options: this.teamOptions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Team is required',
        },
      },
    };
  }

  roundTwoField(): FormlyFieldConfig {
    return {
      key: 'round_two',
      className: 'w-full md:w-2',
      type: 'single-select',
      templateOptions: {
        label: 'Round Two',
        placeholder: 'Select Team',
        required: true,
        options: this.teamOptions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Team is required',
        },
      },
    };
  }

  roundThreeField(): FormlyFieldConfig {
    return {
      key: 'round_three',
      className: 'w-full md:w-2',
      type: 'single-select',
      templateOptions: {
        label: 'Round Three',
        placeholder: 'Select Team',
        required: true,
        options: this.teamOptions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Team is required',
        },
      },
    };
  }

  roundFourField(): FormlyFieldConfig {
    return {
      key: 'round_four',
      className: 'w-full md:w-2',
      type: 'single-select',
      templateOptions: {
        label: 'Round Four',
        placeholder: 'Select Team',
        required: true,
        options: this.teamOptions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Team is required',
        },
      },
    };
  }

  roundFiveField(): FormlyFieldConfig {
    return {
      key: 'round_five',
      className: 'w-full md:w-2',
      type: 'single-select',
      templateOptions: {
        label: 'Round Five',
        placeholder: 'Select Team',
        required: true,
        options: this.teamOptions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Team is required',
        },
      },
    };
  }
}
