import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-league-trades-team-card',
  templateUrl: './league-trades-team-card.component.html',
  styleUrls: ['./league-trades-team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTradesTeamCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
