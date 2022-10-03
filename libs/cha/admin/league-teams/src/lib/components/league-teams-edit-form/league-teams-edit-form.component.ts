import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-teams-edit-form',
  templateUrl: './league-teams-edit-form.component.html',
  styleUrls: ['./league-teams-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
