import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueUsersFacade } from '../../+state/league-users.facade';

@Component({
  selector: 'cha-admin-league-users',
  templateUrl: './league-users.component.html',
  styleUrls: ['./league-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueUsersComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private leagueUsersFacade: LeagueUsersFacade) {
    this.isLoaded$ = this.leagueUsersFacade.isLoaded$;
    this.isLoading$ = this.leagueUsersFacade.isLoading$;

    this.leagueUsersFacade.getUsers();
  }
}
