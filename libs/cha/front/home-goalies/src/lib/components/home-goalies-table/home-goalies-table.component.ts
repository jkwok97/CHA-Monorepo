import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-goalies-table',
  templateUrl: './home-goalies-table.component.html',
  styleUrls: ['./home-goalies-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeGoaliesTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
