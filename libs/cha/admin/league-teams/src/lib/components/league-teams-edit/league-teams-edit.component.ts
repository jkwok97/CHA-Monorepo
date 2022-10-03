import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-teams-edit',
  templateUrl: './league-teams-edit.component.html',
  styleUrls: ['./league-teams-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
