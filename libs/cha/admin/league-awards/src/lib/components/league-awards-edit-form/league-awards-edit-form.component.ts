import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-awards-edit-form',
  templateUrl: './league-awards-edit-form.component.html',
  styleUrls: ['./league-awards-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueAwardsEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
