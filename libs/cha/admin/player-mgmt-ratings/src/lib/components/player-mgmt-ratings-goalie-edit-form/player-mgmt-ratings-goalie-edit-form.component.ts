import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { GoalieRatingDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-player-mgmt-ratings-goalie-edit-form',
  templateUrl: './player-mgmt-ratings-goalie-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsGoalieEditFormComponent implements OnInit {
  @Input() goalie!: GoalieRatingDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit(): void {
    if (this.goalie) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [this.playerIdField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.skatingField(),
          this.speedField(),
          this.passingField(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      player_id: this.goalie?.player_id,
      skating: this.goalie?.skating,
      speed: this.goalie?.speed,
      passing: this.goalie?.passing,
    };
  }

  playerIdField(): FormlyFieldConfig {
    return {
      key: 'player_id',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Player Id',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  skatingField(): FormlyFieldConfig {
    return {
      key: 'skating',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Skating',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  speedField(): FormlyFieldConfig {
    return {
      key: 'speed',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Speed',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  passingField(): FormlyFieldConfig {
    return {
      key: 'passing',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Passing',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }
}
