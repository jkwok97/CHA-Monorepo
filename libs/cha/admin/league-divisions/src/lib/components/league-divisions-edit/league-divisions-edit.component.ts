import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-divisions-edit',
  templateUrl: './league-divisions-edit.component.html',
  styleUrls: ['./league-divisions-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
