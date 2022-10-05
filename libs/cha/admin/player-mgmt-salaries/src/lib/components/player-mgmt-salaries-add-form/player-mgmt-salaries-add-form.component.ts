import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-player-mgmt-salaries-add-form',
  templateUrl: './player-mgmt-salaries-add-form.component.html',
  styleUrls: ['./player-mgmt-salaries-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtSalariesAddFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
