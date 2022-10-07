import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-current-data',
  templateUrl: './league-current-data.component.html',
  styleUrls: ['./league-current-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueCurrentDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
