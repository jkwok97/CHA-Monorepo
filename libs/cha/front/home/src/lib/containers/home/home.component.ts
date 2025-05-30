import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, first, map, Observable } from 'rxjs';
import { HomeFacade } from '../../+state/home.facade';
import { DisplayFacade, UserTeamFacade } from '@cha/domain/core';
import { TeamDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  isLoaded$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  userTeam$: Observable<TeamDto | undefined> =
    this.userTeamFacade.currentUserTeam$;
  isMobile$: Observable<boolean> = this.displayFacade.isMobile$;

  constructor(
    private homeFacade: HomeFacade,
    private userTeamFacade: UserTeamFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = combineLatest([
      this.homeFacade.goalieSalaryLoaded$,
      this.homeFacade.playerSalaryLoaded$,
      this.homeFacade.teamRecordLoaded$,
    ]).pipe(
      map(
        ([goalieLoaded, playerLoaded, recordLoaded]: [
          boolean,
          boolean,
          boolean
        ]) => goalieLoaded && playerLoaded && recordLoaded
      )
    );

    this.isLoading$ = combineLatest([
      this.homeFacade.goalieSalaryLoaded$,
      this.homeFacade.playerSalaryLoaded$,
      this.homeFacade.teamRecordLoaded$,
    ]).pipe(
      map(
        ([goalieLoaded, playerLoaded, recordLoaded]: [
          boolean,
          boolean,
          boolean
        ]) => !goalieLoaded && !playerLoaded && !recordLoaded
      )
    );
  }

  ngOnInit(): void {
    this.userTeam$.pipe(first()).subscribe((userTeam: TeamDto | undefined) => {
      if (userTeam) {
        this.homeFacade.getUserTeamRecord(userTeam.id);
        this.homeFacade.getPlayerSalaries(userTeam.shortname);
        this.homeFacade.getGoalieSalaries(userTeam.shortname);
      }
    });
  }
}
