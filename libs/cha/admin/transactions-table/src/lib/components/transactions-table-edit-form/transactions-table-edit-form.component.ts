import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { GetTradeDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-transactions-table-edit-form',
  templateUrl: './transactions-table-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableEditFormComponent implements OnInit {
  @Input() trade!: GetTradeDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit(): void {
    if (this.trade) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [this.teamOneField()],
      },
      this.teamOnePicks(),
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [this.teamTwoField()],
      },
      this.teamTwoPicks(),
    ];
  }

  patchForm() {
    this.model = {
      id: this.trade?.id,
      team_one_id: `${this.trade?.team_one_id.city} ${this.trade?.team_one_id.nickname}`,
      team_one_picks:
        this.trade?.team_one_picks && this.trade?.team_one_picks.length > 0
          ? this.trade?.team_one_picks.map((pick: string) => ({
              pick: pick,
            }))
          : [{ pick: ' ' }],
      team_two_id: `${this.trade?.team_two_id.city} ${this.trade?.team_two_id.nickname}`,
      team_two_picks:
        this.trade?.team_two_picks && this.trade?.team_two_picks.length > 0
          ? this.trade?.team_two_picks.map((pick: string) => ({
              pick: pick,
            }))
          : [{ pick: ' ' }],
    };
  }

  teamOneField(): FormlyFieldConfig {
    return {
      key: 'team_one_id',
      className: 'w-full md:w-3',
      type: 'text-input',
      props: {
        label: 'Team',
        readonly: true,
      },
    };
  }

  teamTwoField(): FormlyFieldConfig {
    return {
      key: 'team_two_id',
      className: 'w-full md:w-3',
      type: 'text-input',
      props: {
        label: 'Team',
        readonly: true,
      },
    };
  }

  teamOnePicks(): FormlyFieldConfig {
    return {
      key: 'team_one_picks',
      type: 'repeating',
      fieldArray: {
        fieldGroup: [this.teamPickField()],
      },
    };
  }

  teamTwoPicks(): FormlyFieldConfig {
    return {
      key: 'team_two_picks',
      type: 'repeating',
      fieldArray: {
        fieldGroup: [this.teamPickField()],
      },
    };
  }

  teamPickField(): FormlyFieldConfig {
    return {
      key: 'pick',
      type: 'text-input',
      props: {
        label: 'Pick',
      },
    };
  }
}
