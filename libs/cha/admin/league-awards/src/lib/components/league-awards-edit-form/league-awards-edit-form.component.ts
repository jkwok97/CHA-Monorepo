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
import { combineLatest, first, Observable, startWith, switchMap } from 'rxjs';
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
        fieldGroup: [this.currentSeasonField(), this.displaySeasonField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          this.awardTypeField(),
          this.userField(),
          this.userTeamField(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [this.playerField()],
      },
    ];
  }

  patchForm() {
    this.model = {
      cha_season: this.award?.cha_season,
      display_season: this.award?.display_season,
      award_type: this.award?.award_type.id,
      users_id: this.award?.users_id.id,
      player_id: this.award?.player_id?.id,
    };
  }

  currentSeasonField(): FormlyFieldConfig {
    return {
      key: 'cha_season',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'CHA Season',
        placeholder: 'Enter Season',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Season is required',
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          if (!this.award) {
            this.leagueDataFacade.currentSeason$
              .pipe(first())
              .subscribe((season: string | undefined) => {
                if (season) {
                  field.formControl?.setValue(season);
                }
              });
          }
        },
      },
    };
  }

  displaySeasonField(): FormlyFieldConfig {
    return {
      key: 'display_season',
      className: 'w-full md:w-3',
      type: 'text-input',
      templateOptions: {
        label: 'Season To Display',
        placeholder: 'Enter Season',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Season is required',
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          if (!this.award) {
            this.leagueDataFacade.currentSeason$
              .pipe(first())
              .subscribe((season: string | undefined) => {
                const seasonSplit = season?.split('-');

                if (seasonSplit) {
                  field.formControl?.setValue(Number(seasonSplit[0]) + 1);
                }
              });
          }
        },
      },
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
              if (teamId) {
                field.formControl?.setValue(teamId);
              }
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

  playerField(): FormlyFieldConfig {
    return {
      key: 'player_id',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Player / Goalie',
        placeholder: 'Select',
        required: true,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Player is required',
        },
      },
      hideExpression: (model) =>
        model.award_type === 2 ||
        model.award_type === 3 ||
        model.award_type === 4 ||
        !model.award_type,
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          const teamControl = this.form.get('team_id');
          const seasonControl = this.form.get('cha_season');

          combineLatest([
            teamControl?.valueChanges,
            seasonControl?.valueChanges,
          ])
            .pipe(
              startWith([
                teamControl?.value as number,
                seasonControl?.value as string,
              ]),
              switchMap(([team, season]) => [
                this.leagueDataFacade.getTeamNameById(team as number),
                season,
              ]),
              untilDestroyed(this)
            )
            .subscribe((result) => {
              console.log(result);
            });
        },
      },
    };
  }
}
