import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { UserDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
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
  users$: Observable<UserDto[]>;

  isMobile!: boolean;

  constructor(
    private leagueUsersFacade: LeagueUsersFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.leagueUsersFacade.isLoaded$;
    this.isLoading$ = this.leagueUsersFacade.isLoading$;
    this.users$ = this.leagueUsersFacade.users$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.leagueUsersFacade.getUsers();
  }
}
