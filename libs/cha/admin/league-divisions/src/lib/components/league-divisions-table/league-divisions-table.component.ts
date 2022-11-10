import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-divisions-table',
  templateUrl: './league-divisions-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
