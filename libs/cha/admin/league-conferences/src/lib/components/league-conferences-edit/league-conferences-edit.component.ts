import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-conferences-edit',
  templateUrl: './league-conferences-edit.component.html',
  styleUrls: ['./league-conferences-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueConferencesEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
