import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { LeagueDataFacade } from '@cha/domain/core';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { PlayerMgmtGoalieCurrentFacade } from '../../+state/player-mgmt-goalie-current.facade';

@Component({
  selector: 'cha-admin-player-mgmt-goalie-current-edit-form',
  templateUrl: './player-mgmt-goalie-current-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtGoalieCurrentEditFormComponent implements OnInit {
  @Input() goalie!: StatGoalieAllDto | null;

  teamOptions$: Observable<any>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(
    private playerMgmtGoalieCurrentFacade: PlayerMgmtGoalieCurrentFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.teamOptions$ = this.leagueDataFacade.leagueTeamsOptions$;
  }

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
        fieldGroup: [this.teamField(), this.statusField()],
      },
    ];
  }

  patchForm() {
    this.model = {
      ...this.goalie,
      player_id: {
        id: this.goalie?.player_id.id,
      },
      team_name: this.goalie?.teamInfo.shortname,
    };
  }

  playerIdField(): FormlyFieldConfig {
    return {
      key: 'player_id.id',
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

  teamField(): FormlyFieldConfig {
    return {
      key: 'team_name',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Team',
        placeholder: 'Select Team',
        required: true,
        options: this.teamOptions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Team is required',
        },
      },
    };
  }

  statusField(): FormlyFieldConfig {
    return {
      key: 'player_status',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Player Status',
        required: true,
        options: [
          { label: 'Veteran', value: 'Veteran' },
          { label: 'Rookie', value: 'Rookie' },
        ],
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Status is required',
        },
      },
    };
  }
}
