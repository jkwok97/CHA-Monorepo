import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ScheduleAllDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-schedule-games-edit-form',
  templateUrl: './schedule-games-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesEditFormComponent implements OnInit {
  @Input() game!: ScheduleAllDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit(): void {
    if (this.game) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [
          this.homeTeamField(),
          this.homeTeamScore(),
          this.visTeamField(),
          this.visTeamScore(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      homeTeam: `${this.game?.homeTeamInfo.city} ${this.game?.homeTeamInfo.nickname}`,
      visTeam: `${this.game?.visTeamInfo.city} ${this.game?.visTeamInfo.nickname}`,
      home_team_score: this.game?.home_team_score,
      vis_team_score: this.game?.vis_team_score,
    };
  }

  homeTeamScore(): FormlyFieldConfig {
    return {
      key: 'home_team_score',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Home Score',
        placeholder: 'Enter Score',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Score is required',
        },
      },
    };
  }

  homeTeamField(): FormlyFieldConfig {
    return {
      key: 'homeTeam',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Home Team',
        readonly: true,
      },
    };
  }

  visTeamScore(): FormlyFieldConfig {
    return {
      key: 'vis_team_score',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Visiting Score',
        placeholder: 'Enter Score',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Score is required',
        },
      },
    };
  }

  visTeamField(): FormlyFieldConfig {
    return {
      key: 'visTeam',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Visiting Team',
        readonly: true,
      },
    };
  }
}
