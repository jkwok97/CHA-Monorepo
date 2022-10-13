import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-current-data-edit',
  templateUrl: './league-current-data-edit.component.html',
  styleUrls: ['./league-current-data-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueCurrentDataEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
