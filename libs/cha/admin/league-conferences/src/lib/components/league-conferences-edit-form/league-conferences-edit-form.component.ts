import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-conferences-edit-form',
  templateUrl: './league-conferences-edit-form.component.html',
  styleUrls: ['./league-conferences-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueConferencesEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
