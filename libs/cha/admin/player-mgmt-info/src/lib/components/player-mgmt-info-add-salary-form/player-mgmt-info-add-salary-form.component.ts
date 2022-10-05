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
  selector: 'cha-admin-player-mgmt-info-add-salary-form',
  templateUrl: './player-mgmt-info-add-salary-form.component.html',
  styleUrls: ['./player-mgmt-info-add-salary-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoAddSalaryFormComponent implements OnInit {
  @Input() player!: PlayerDto | null;

  form = new UntypedFormGroup({});
  model: any = {
    season_2020: '',
    season_2021: '',
    season_2022: '',
    season_2023: '',
    season_2024: '',
    season_2025: '',
    season_2026: '',
    season_2027: '',
    season_2028: '',
    season_2029: '',
    season_2030: '',
    season_2031: '',
    season_2032: '',
    season_2033: '',
    season_2034: '',
    season_2035: '',
    season_2036: '',
    season_2037: '',
    season_2038: '',
    season_2039: '',
    season_2040: '',
  };
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
          this.nhl2020Field(),
          this.nhl2021Field(),
          this.nhl2022Field(),
          this.nhl2023Field(),
          this.nhl2024Field(),
          this.nhl2025Field(),
          this.nhl2026Field(),
          this.nhl2027Field(),
          this.nhl2028Field(),
          this.nhl2029Field(),
          this.nhl2030Field(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.nhl2031Field(),
          this.nhl2032Field(),
          this.nhl2033Field(),
          this.nhl2034Field(),
          this.nhl2035Field(),
          this.nhl2036Field(),
          this.nhl2037Field(),
          this.nhl2038Field(),
          this.nhl2039Field(),
          this.nhl2040Field(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      ...this.model,
      player_id: this.player?.id,
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
          required: () => 'Player Id is required',
        },
      },
    };
  }

  nhl2020Field(): FormlyFieldConfig {
    return {
      key: 'season_2020',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2019-20',
      },
    };
  }

  nhl2021Field(): FormlyFieldConfig {
    return {
      key: 'season_2021',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2020-21',
      },
    };
  }

  nhl2022Field(): FormlyFieldConfig {
    return {
      key: 'season_2022',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2021-22',
      },
    };
  }

  nhl2023Field(): FormlyFieldConfig {
    return {
      key: 'season_2023',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2022-23',
      },
    };
  }

  nhl2024Field(): FormlyFieldConfig {
    return {
      key: 'season_2024',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2023-24',
      },
    };
  }

  nhl2025Field(): FormlyFieldConfig {
    return {
      key: 'season_2025',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2024-25',
      },
    };
  }

  nhl2026Field(): FormlyFieldConfig {
    return {
      key: 'season_2026',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2025-26',
      },
    };
  }

  nhl2027Field(): FormlyFieldConfig {
    return {
      key: 'season_2027',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2026-27',
      },
    };
  }

  nhl2028Field(): FormlyFieldConfig {
    return {
      key: 'season_2028',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2027-28',
      },
    };
  }

  nhl2029Field(): FormlyFieldConfig {
    return {
      key: 'season_2029',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2028-29',
      },
    };
  }

  nhl2030Field(): FormlyFieldConfig {
    return {
      key: 'season_2030',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2029-30',
      },
    };
  }

  nhl2031Field(): FormlyFieldConfig {
    return {
      key: 'season_2031',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2030-31',
      },
    };
  }

  nhl2032Field(): FormlyFieldConfig {
    return {
      key: 'season_2032',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2031-32',
      },
    };
  }

  nhl2033Field(): FormlyFieldConfig {
    return {
      key: 'season_2033',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2032-33',
      },
    };
  }

  nhl2034Field(): FormlyFieldConfig {
    return {
      key: 'season_2034',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2033-34',
      },
    };
  }

  nhl2035Field(): FormlyFieldConfig {
    return {
      key: 'season_2035',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2034-35',
      },
    };
  }

  nhl2036Field(): FormlyFieldConfig {
    return {
      key: 'season_2036',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2035-36',
      },
    };
  }

  nhl2037Field(): FormlyFieldConfig {
    return {
      key: 'season_2037',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2036-37',
      },
    };
  }

  nhl2038Field(): FormlyFieldConfig {
    return {
      key: 'season_2038',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2037-38',
      },
    };
  }

  nhl2039Field(): FormlyFieldConfig {
    return {
      key: 'season_2039',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2038-39',
      },
    };
  }

  nhl2040Field(): FormlyFieldConfig {
    return {
      key: 'season_2040',
      className: 'w-5 md:w-1',
      type: 'text-input',
      templateOptions: {
        label: 'NHL 2039-40',
      },
    };
  }
}
