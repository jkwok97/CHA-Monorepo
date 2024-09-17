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
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.shootingField(),
          this.skatingField(),
          this.speedField(),
          this.passingField(),
          this.forecheckField(),
          this.physicalField(),
          this.intimidationField(),
          this.clearCreaseField(),
          this.rockField(),
          this.pkField(),
          this.shotBlockField(),
          this.faceOffField(),
          this.assistRatingField(),
          this.shiftFatigueField(),
          this.gameFatigueField(),
        ],
      },
    ];
  }

  patchForm() {
    console.log(this.player);
    this.model = {
      player_id: this.player?.player_id,
      game_fatigue: this.player?.game_fatigue,
      shift_fatigue: this.player?.shift_fatigue,
      shooting: this.player?.shooting,
      skating: this.player?.skating,
      speed: this.player?.speed,
      passing: this.player?.passing,
      forecheck: this.player?.forecheck,
      physical: this.player?.physical,
      intimidation: this.player?.intimidation,
      clear_crease: this.player?.clear_crease,
      rock: this.player?.rock,
      pk: this.player?.pk,
      shot_block: this.player?.shot_block,
      face_off: this.player?.face_off,
      assist_rating: this.player?.assist_rating,
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

  shootingField(): FormlyFieldConfig {
    return {
      key: 'shooting',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Shooting',
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
      className: 'w-full md:w-1',
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
      className: 'w-full md:w-1',
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
      className: 'w-full md:w-1',
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

  physicalField(): FormlyFieldConfig {
    return {
      key: 'physical',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Physical',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  intimidationField(): FormlyFieldConfig {
    return {
      key: 'intimidation',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Intimidation',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  clearCreaseField(): FormlyFieldConfig {
    return {
      key: 'clear_crease',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Clear Crease',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  forecheckField(): FormlyFieldConfig {
    return {
      key: 'forecheck',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Forecheck',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  rockField(): FormlyFieldConfig {
    return {
      key: 'rock',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Rock',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  pkField(): FormlyFieldConfig {
    return {
      key: 'pk',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Penalty Kill',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  shotBlockField(): FormlyFieldConfig {
    return {
      key: 'shot_block',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Shot Block',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  faceOffField(): FormlyFieldConfig {
    return {
      key: 'face_off',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Face Off',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  assistRatingField(): FormlyFieldConfig {
    return {
      key: 'assist_rating',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Assist Rating',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  shiftFatigueField(): FormlyFieldConfig {
    return {
      key: 'shift_fatigue',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Shift Fatigue',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  gameFatigueField(): FormlyFieldConfig {
    return {
      key: 'game_fatigue',
      className: 'w-full md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'Game Fatigue',
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
