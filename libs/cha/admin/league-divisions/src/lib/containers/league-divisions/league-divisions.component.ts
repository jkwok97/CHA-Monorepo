import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-divisions',
  templateUrl: './league-divisions.component.html',
  styleUrls: ['./league-divisions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
