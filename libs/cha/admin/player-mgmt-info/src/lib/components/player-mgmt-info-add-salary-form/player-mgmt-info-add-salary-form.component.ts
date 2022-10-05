import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlayerDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-player-mgmt-info-add-salary-form',
  templateUrl: './player-mgmt-info-add-salary-form.component.html',
  styleUrls: ['./player-mgmt-info-add-salary-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtInfoAddSalaryFormComponent implements OnInit {
  @Input() player!: PlayerDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];
  
  constructor() {}

  ngOnInit(): void {}
}
