import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-admin-league-users',
  templateUrl: './league-users.component.html',
  styleUrls: ['./league-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersComponent {}
