import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlayerRatingDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-player-mgmt-ratings-player-edit-form',
  templateUrl: './player-mgmt-ratings-player-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsPlayerEditFormComponent implements OnInit {
  @Input() player!: PlayerRatingDto | null;

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
        fieldGroup: [this.playerIdField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.centerField(),
          this.leftField(),
          this.rightField(),
          this.leftdefenseField(),
          this.rightdefenseField(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      player_id: this.player?.player_id,
      game_fatigue: this.player?.game_fatigue,
      shift_fatigue: this.player?.shift_fatigue,
      c_rate: this.player?.c_rate,
      l_rate: this.player?.l_rate,
      r_rate: this.player?.r_rate,
      ld_rate: this.player?.ld_rate,
      rd_rate: this.player?.rd_rate,
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
        readonly: true,
      },
      validation: {
        messages: {
          required: () => 'Player Id is required',
        },
      },
    };
  }

  centerField(): FormlyFieldConfig {
    return {
      key: 'c_rate',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'C',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  leftField(): FormlyFieldConfig {
    return {
      key: 'l_rate',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'LW',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  rightField(): FormlyFieldConfig {
    return {
      key: 'r_rate',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'RW',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  leftdefenseField(): FormlyFieldConfig {
    return {
      key: 'ld_rate',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'LD',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  rightdefenseField(): FormlyFieldConfig {
    return {
      key: 'rd_rate',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'RD',
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
