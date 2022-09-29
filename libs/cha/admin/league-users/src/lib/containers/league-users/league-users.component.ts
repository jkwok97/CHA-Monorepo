import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueUsersFacade } from '../../+state/league-users.facade';

@Component({
  selector: 'cha-admin-league-users',
  templateUrl: './league-users.component.html',
  styleUrls: ['./league-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersComponent {
  constructor(private leagueUsersFacade: LeagueUsersFacade) {
    this.leagueUsersFacade.getUsers();
  }
}
