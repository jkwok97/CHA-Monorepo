import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-current-data-edit-form',
  templateUrl: './league-current-data-edit-form.component.html',
  styleUrls: ['./league-current-data-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueCurrentDataEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
