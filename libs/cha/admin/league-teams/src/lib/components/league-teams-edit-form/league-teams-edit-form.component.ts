import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TeamDto, UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { LeagueTeamsFacade } from '../../+state/league-teams.facade';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-teams-edit-form',
  templateUrl: './league-teams-edit-form.component.html',
  styleUrls: ['./league-teams-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsEditFormComponent implements OnInit {
  @Input() team!: TeamDto | null;

  users$: Observable<UserDto[]>;
  divisions$: Observable<any[]>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(private leagueTeamsFacade: LeagueTeamsFacade) {
    this.users$ = this.leagueTeamsFacade.users$;
    this.divisions$ = this.leagueTeamsFacade.divisions$;
  }

  ngOnInit(): void {
    if (this.team) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [this.isActiveField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.teamAbbreviationField(),
          this.cityField(),
          this.nicknameField(),
          this.userField(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.divisionsField(),
          this.logoField(),
          this.teamColorField(),
          this.textColorField(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      shortname: this.team?.shortname,
      isactive: this.team?.isactive,
      city: this.team?.city,
      nickname: this.team?.nickname,
      users_id: this.team?.users_id,
      divisions_id: this.team?.divisions_id.id,
      teamlogo: this.team?.teamlogo,
      teamcolor: this.team?.teamcolor,
      teamtextcolor: this.team?.teamtextcolor,
    };
  }

  isActiveField(): FormlyFieldConfig {
    return {
      key: 'isactive',
      className: 'w-5',
      type: 'checkbox',
      templateOptions: {
        label: 'Active Team',
      },
    };
  }

  teamAbbreviationField(): FormlyFieldConfig {
    return {
      key: 'shortname',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Team Abbreviation',
        placeholder: 'Enter Team Abbreviation',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Team Abbreviation is required',
        },
      },
    };
  }

  cityField(): FormlyFieldConfig {
    return {
      key: 'city',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'City',
        placeholder: 'Enter City',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'City is required',
        },
      },
    };
  }

  nicknameField(): FormlyFieldConfig {
    return {
      key: 'nickname',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Nickname',
        placeholder: 'Enter Nickname',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Nickname is required',
        },
      },
    };
  }

  userField(): FormlyFieldConfig {
    return {
      key: 'users_id',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'User',
        placeholder: 'Select User',
        required: true,
        options: this.users$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'User is required',
        },
      },
    };
  }

  divisionsField(): FormlyFieldConfig {
    return {
      key: 'divisions_id',
      className: 'w-full md:w-2',
      type: 'single-select',
      templateOptions: {
        label: 'Division',
        placeholder: 'Select Division',
        required: true,
        options: this.divisions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Division is required',
        },
      },
    };
  }

  logoField(): FormlyFieldConfig {
    return {
      key: 'teamlogo',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Team Logo',
        placeholder: 'Enter Path',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Team Logo is required',
        },
      },
    };
  }

  teamColorField(): FormlyFieldConfig {
    return {
      key: 'teamcolor',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Team Color',
        placeholder: 'Enter Hex Color',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Team Color is required',
        },
      },
    };
  }

  textColorField(): FormlyFieldConfig {
    return {
      key: 'teamtextcolor',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Team Text Color',
        placeholder: 'Enter Hex Color',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Team Text Color is required',
        },
      },
    };
  }
}
