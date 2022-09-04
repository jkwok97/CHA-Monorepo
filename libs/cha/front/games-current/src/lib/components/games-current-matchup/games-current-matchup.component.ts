import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-games-current-matchup',
  templateUrl: './games-current-matchup.component.html',
  styleUrls: ['./games-current-matchup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentMatchupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
