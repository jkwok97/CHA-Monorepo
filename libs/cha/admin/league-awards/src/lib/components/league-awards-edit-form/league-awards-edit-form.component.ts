import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { LeagueDataFacade } from '@cha/domain/core';
import { AwardDto, TeamsEnum, UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, startWith, switchMap } from 'rxjs';
import { LeagueAwardsFacade } from '../../+state/league-awards.facade';

@UntilDestroy()
@Component({
  selector: 'cha-admin-league-awards-edit-form',
  templateUrl: './league-awards-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsEditFormComponent implements OnInit {
  @Input() award!: AwardDto | null;

  users$: Observable<UserDto[]>;
  awardTypes$: Observable<any[]>;
  teams$: Observable<any[]>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(
    private leagueAwardsFacade: LeagueAwardsFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.users$ = this.leagueAwardsFacade.users$;
    this.awardTypes$ = this.leagueAwardsFacade.awardTypes$;
    this.teams$ = this.leagueDataFacade.leagueTeamsOptionsById$;
  }

  ngOnInit(): void {
    this.leagueAwardsFacade.getAwardTypes();
    this.leagueAwardsFacade.getUsers();

    if (this.award) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [
          this.awardTypeField(),
          this.userField(),
          this.userTeamField(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [],
      },
    ];
  }

  patchForm() {
    this.model = {
      award_type: this.award?.award_type.id,
      users_id: this.award?.users_id.id,
    };
  }

  awardTypeField(): FormlyFieldConfig {
    return {
      key: 'award_type',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Award Type',
        placeholder: 'Select Award Type',
        required: true,
        options: this.awardTypes$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Award Type is required',
        },
      },
    };
  }

  userTeamField(): FormlyFieldConfig {
    return {
      key: 'team_id',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Team',
        placeholder: 'Select Team',
        readonly: true,
        required: true,
        options: this.teams$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Team is required',
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          const userControl = this.form.get('users_id');

          userControl?.valueChanges
            .pipe(
              startWith(userControl.value as number),
              switchMap((userId: number) =>
                this.leagueDataFacade.getTeamIdFromUserId(userId)
              ),
              untilDestroyed(this)
            )
            .subscribe((teamId: TeamsEnum | undefined) => {
              field.formControl?.setValue(teamId);
            });
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
        label: 'Owner',
        placeholder: 'Select Owner',
        required: true,
        options: this.users$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Owner is required',
        },
      },
    };
  }
}
