import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { LeagueDataFacade } from '@cha/domain/core';
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

  constructor(
    private draftMgmtEntryFacade: DraftMgmtEntryFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.playersOptions$ = this.draftMgmtEntryFacade.playerOptions$;
    this.teamOptions$ = this.leagueDataFacade.leagueTeamsOptions$;
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
        fieldGroup: [this.playerField()],
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
    console.log(this.pick);
    this.model = {
      player_id: this.pick?.player_id.id,
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
          required: () => 'Team is required',
        },
      },
    };
  }
}
