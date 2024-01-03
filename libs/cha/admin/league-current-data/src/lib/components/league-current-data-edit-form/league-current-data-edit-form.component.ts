import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { LeagueDataDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-league-current-data-edit-form',
  templateUrl: './league-current-data-edit-form.component.html',
  styleUrls: ['./league-current-data-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueCurrentDataEditFormComponent implements OnInit {
  @Input() data!: LeagueDataDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit(): void {
    if (this.data) {
      this.patchForm();
    }

    this.fields = [
      this.offSeasonField(),
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.currentYearField(),
          this.nextYearField(),
          this.prevYearField(),
          this.nhlYearField(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.seasonTypeField(),
          this.currentDayField(),
          this.currentDraftYearField(),
          this.nextDraftYearField(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.currentCapField(),
          this.nextCapField(),
          this.minGamesField(),
          this.minGamesStatsField(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      current_year: this.data?.current_year,
      next_year: this.data?.next_year,
      prev_year: this.data?.prev_year,
      nhl_year: this.data?.nhl_year,
      current_season_type: this.data?.current_season_type,
      current_day: this.data?.current_day,
      current_draft_year: this.data?.current_draft_year,
      next_draft_year: this.data?.next_draft_year,
      current_cap: this.data?.current_cap,
      next_cap: this.data?.next_cap,
      min_games: this.data?.min_games,
      offseason: this.data?.offseason,
      min_games_stats: this.data?.min_games_stats,
    };
  }

  currentYearField(): FormlyFieldConfig {
    return {
      key: 'current_year',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Current CHA Season',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  nextYearField(): FormlyFieldConfig {
    return {
      key: 'next_year',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Next CHA Season',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  prevYearField(): FormlyFieldConfig {
    return {
      key: 'prev_year',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Previous CHA Season',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  nhlYearField(): FormlyFieldConfig {
    return {
      key: 'nhl_year',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'NHL Season',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  seasonTypeField(): FormlyFieldConfig {
    return {
      key: 'current_season_type',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Season Type',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  currentDayField(): FormlyFieldConfig {
    return {
      key: 'current_day',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Current Day',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  currentDraftYearField(): FormlyFieldConfig {
    return {
      key: 'current_draft_year',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Current Draft Year',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  nextDraftYearField(): FormlyFieldConfig {
    return {
      key: 'next_draft_year',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Next Draft Year',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  currentCapField(): FormlyFieldConfig {
    return {
      key: 'current_cap',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Current Cap',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  nextCapField(): FormlyFieldConfig {
    return {
      key: 'next_cap',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Next Cap',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  minGamesStatsField(): FormlyFieldConfig {
    return {
      key: 'min_games_stats',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Min Games For Stats',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  minGamesField(): FormlyFieldConfig {
    return {
      key: 'min_games',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Min Games For G',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'required',
        },
      },
    };
  }

  offSeasonField(): FormlyFieldConfig {
    return {
      key: 'offseason',
      className: 'w-5',
      type: 'checkbox',
      templateOptions: {
        label: 'Offseason',
      },
    };
  }
}
