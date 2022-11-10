import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { DivisionDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { LeagueDivisionsFacade } from '../../+state/league-divisions.facade';

@Component({
  selector: 'cha-admin-league-divisions-edit-form',
  templateUrl: './league-divisions-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsEditFormComponent implements OnInit {
  @Input() division!: DivisionDto | null;

  conferences$: Observable<any[]>;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  constructor(private leagueDivisionsFacade: LeagueDivisionsFacade) {
    this.conferences$ = this.leagueDivisionsFacade.conferenceOptions$;

    this.leagueDivisionsFacade.getConferences()
  }

  ngOnInit(): void {
    if (this.division) {
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
