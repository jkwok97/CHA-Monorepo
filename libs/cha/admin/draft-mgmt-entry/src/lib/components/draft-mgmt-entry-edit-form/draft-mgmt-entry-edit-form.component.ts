import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { DraftPickDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { DraftMgmtEntryFacade } from '../../+state/draft-mgmt-entry.facade';

@Component({
  selector: 'cha-admin-draft-mgmt-entry-edit-form',
  templateUrl: './draft-mgmt-entry-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftMgmtEntryEditFormComponent implements OnInit {
  @Input() pick!: DraftPickDto | null;

  playersOptions$: Observable<any[]>;
  teamOptions$: Observable<any>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(private draftMgmtEntryFacade: DraftMgmtEntryFacade) {
    this.playersOptions$ = this.draftMgmtEntryFacade.playerOptions$;
    this.teamOptions$ = this.draftMgmtEntryFacade.teamOptions$;
  }

  ngOnInit(): void {
    if (this.pick) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [
          this.draftYearField(),
          this.draftRoundField(),
          this.draftOverallField(),
          this.originalTeamField(),
        ],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [this.playerField(), this.pickTeamField()],
      },
    ];
  }

  patchForm() {
    console.log(this.pick);
    this.model = {
      draft_year: this.pick?.draft_year,
      draft_round: this.pick?.draft_round,
      draft_overall: this.pick?.draft_overall,
      pick_team_id: this.pick?.pick_team_id?.id,
      player_id: this.pick?.player_id.id,
      team_id: this.pick?.team_id.id,
    };
  }

  draftYearField(): FormlyFieldConfig {
    return {
      key: 'draft_year',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Draft Year',
        placeholder: 'Enter Draft Year',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Draft Year is required',
        },
      },
    };
  }

  draftRoundField(): FormlyFieldConfig {
    return {
      key: 'draft_round',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Round',
        placeholder: 'Enter Round',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Round is required',
        },
      },
    };
  }

  draftOverallField(): FormlyFieldConfig {
    return {
      key: 'draft_overall',
      className: 'w-full md:w-2',
      type: 'text-input',
      templateOptions: {
        label: 'Overall',
        placeholder: 'Enter Overall',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Overall is required',
        },
      },
    };
  }

  originalTeamField(): FormlyFieldConfig {
    return {
      key: 'pick_team_id',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Original Team',
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

  playerField(): FormlyFieldConfig {
    return {
      key: 'player_id',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Player',
        placeholder: 'Select Player',
        required: true,
        options: this.playersOptions$,
        valueProp: 'value',
        labelProp: 'label',
      },
      validation: {
        messages: {
          required: () => 'Player is required',
        },
      },
    };
  }

  pickTeamField(): FormlyFieldConfig {
    return {
      key: 'team_id',
      className: 'w-full md:w-3',
      type: 'single-select',
      templateOptions: {
        label: 'Original Team',
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
}
