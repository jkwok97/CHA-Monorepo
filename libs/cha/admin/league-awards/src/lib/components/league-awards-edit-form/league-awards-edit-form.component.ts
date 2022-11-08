import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { AwardDto, UserDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { LeagueAwardsFacade } from '../../+state/league-awards.facade';

@Component({
  selector: 'cha-admin-league-awards-edit-form',
  templateUrl: './league-awards-edit-form.component.html',
  styleUrls: ['./league-awards-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsEditFormComponent implements OnInit {
  @Input() award!: AwardDto | null;

  users$: Observable<UserDto[]>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(private leagueAwardsFacade: LeagueAwardsFacade) {
    this.users$ = this.leagueAwardsFacade.users$;
  }

  ngOnInit(): void {
    if (this.award) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        fieldGroup: [],
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
    this.model = {};
  }
}
