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

    this.fields = [];
  }

  patchForm() {
    this.model = {};
  }
}
