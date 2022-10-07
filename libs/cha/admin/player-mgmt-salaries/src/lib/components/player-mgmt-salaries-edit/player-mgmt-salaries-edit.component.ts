import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SalaryAllDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-edit',
  templateUrl: './player-mgmt-salaries-edit.component.html',
  styleUrls: ['./player-mgmt-salaries-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesEditComponent implements OnInit {
  @Input() salary!: SalaryAllDto | null;
  constructor() {}

  ngOnInit(): void {}
}
