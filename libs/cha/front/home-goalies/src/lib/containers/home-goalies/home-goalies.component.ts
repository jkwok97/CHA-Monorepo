import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-goalies',
  templateUrl: './home-goalies.component.html',
  styleUrls: ['./home-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeGoaliesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
