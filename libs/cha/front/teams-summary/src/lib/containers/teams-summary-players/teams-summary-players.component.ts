import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-teams-summary-players',
  templateUrl: './teams-summary-players.component.html',
  styleUrls: ['./teams-summary-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryPlayersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
