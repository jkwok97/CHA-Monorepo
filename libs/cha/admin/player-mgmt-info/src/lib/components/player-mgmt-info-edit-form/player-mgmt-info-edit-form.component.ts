import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlayerDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-player-mgmt-info-edit-form',
  templateUrl: './player-mgmt-info-edit-form.component.html',
  styleUrls: ['./player-mgmt-info-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoEditFormComponent implements OnInit {
  @Input() player!: PlayerDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit(): void {
    if (this.player) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [this.isActiveField(), this.isProtectedField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.firstNameField(),
          this.lastNameField(),
          this.nhlIdField(),
          this.primaryPositionField(),
          this.altPositionField(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.isGoalieField(),
          this.isDefenseField(),
          this.isForwardField(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      firstname: this.player?.firstname,
      lastname: this.player?.lastname,
      isactive: this.player?.isactive,
      nhl_id: this.player?.nhl_id,
      isgoalie: this.player?.isgoalie,
      isdefense: this.player?.isdefense,
      isforward: this.player?.isforward,
      primary_position: this.player?.primary_position,
      alt_position: this.player?.alt_position,
      is_protected: this.player?.is_protected,
    };
  }

  isActiveField(): FormlyFieldConfig {
    return {
      key: 'isactive',
      className: 'w-full md:w-5',
      type: 'checkbox',
      templateOptions: {
        label: 'Active Player',
      },
    };
  }

  isProtectedField(): FormlyFieldConfig {
    return {
      key: 'is_protected',
      className: 'w-full md:w-5',
      type: 'checkbox',
      templateOptions: {
        label: 'Protected Player',
      },
    };
  }

  firstNameField(): FormlyFieldConfig {
    return {
      key: 'firstname',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'First Name',
        placeholder: 'Enter First Name',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'First Name is required',
        },
      },
    };
  }

  lastNameField(): FormlyFieldConfig {
    return {
      key: 'lastname',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Enter Last Name',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Last Name is required',
        },
      },
    };
  }

  nhlIdField(): FormlyFieldConfig {
    return {
      key: 'nhl_id',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'NHL Id',
        placeholder: 'Enter NHL Id',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'NHL Id is required',
        },
      },
    };
  }

  primaryPositionField(): FormlyFieldConfig {
    return {
      key: 'primary_position',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Primary Position',
        placeholder: 'Enter Position',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Primary Position is required',
        },
      },
    };
  }

  altPositionField(): FormlyFieldConfig {
    return {
      key: 'alt_position',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Alternate Position',
        placeholder: 'Enter Position',
      },
    };
  }

  isGoalieField(): FormlyFieldConfig {
    return {
      key: 'isgoalie',
      className: 'w-full md:w-1',
      type: 'checkbox',
      templateOptions: {
        label: 'Goalie',
      },
    };
  }

  isDefenseField(): FormlyFieldConfig {
    return {
      key: 'isdefense',
      className: 'w-full md:w-1',
      type: 'checkbox',
      templateOptions: {
        label: 'Defense',
      },
    };
  }

  isForwardField(): FormlyFieldConfig {
    return {
      key: 'isforward',
      className: 'w-full md:w-1',
      type: 'checkbox',
      templateOptions: {
        label: 'Forward',
      },
    };
  }
}
