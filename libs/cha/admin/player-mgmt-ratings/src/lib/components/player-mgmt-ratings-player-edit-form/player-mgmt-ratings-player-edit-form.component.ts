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
      // {
      //   fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
      //   fieldGroup: [
      //     this.nhl2020Field(),
      //     this.nhl2021Field(),
      //     this.nhl2022Field(),
      //     this.nhl2023Field(),
      //     this.nhl2024Field(),
      //     this.nhl2025Field(),
      //     this.nhl2026Field(),
      //     this.nhl2027Field(),
      //     this.nhl2028Field(),
      //     this.nhl2029Field(),
      //     this.nhl2030Field(),
      //   ],
      // },
      // {
      //   fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
      //   fieldGroup: [
      //     this.nhl2031Field(),
      //     this.nhl2032Field(),
      //     this.nhl2033Field(),
      //     this.nhl2034Field(),
      //     this.nhl2035Field(),
      //     this.nhl2036Field(),
      //     this.nhl2037Field(),
      //     this.nhl2038Field(),
      //     this.nhl2039Field(),
      //     this.nhl2040Field(),
      //   ],
      // },
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
}
