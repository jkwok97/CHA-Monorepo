import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-games-current-team-card',
  templateUrl: './games-current-team-card.component.html',
  styleUrls: ['./games-current-team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentTeamCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
