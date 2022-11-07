import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-awards-edit',
  templateUrl: './league-awards-edit.component.html',
  styleUrls: ['./league-awards-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
