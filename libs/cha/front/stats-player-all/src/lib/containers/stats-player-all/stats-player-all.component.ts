import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-stats-player-all',
  templateUrl: './stats-player-all.component.html',
  styleUrls: ['./stats-player-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPlayerAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
