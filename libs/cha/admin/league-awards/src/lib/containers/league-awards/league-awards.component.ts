import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-awards',
  templateUrl: './league-awards.component.html',
  styleUrls: ['./league-awards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
