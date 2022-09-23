import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { TeamDto, StatUserTeamRecordDto, UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, first, filter, skip } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-summary-team-banner',
  templateUrl: './summary-team-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryTeamBannerComponent implements OnInit {
  isTeamRecordLoading$: Observable<boolean>;
  isTeamRecordLoaded$: Observable<boolean>;
  teamRecord$: Observable<StatUserTeamRecordDto | null>;
  totalSalary$: Observable<number>;
  nextTotalSalary$: Observable<number>;
  totalPlayers$: Observable<number>;
  userTeam$: Observable<TeamDto | undefined>;
  user$: Observable<UserDto | undefined>;

  isMobile = false;

  constructor(
    private displayFacade: DisplayFacade,
    private teamsSummaryFacade: TeamsSummaryFacade
  ) {
    this.isTeamRecordLoaded$ = this.teamsSummaryFacade.teamRecordLoaded$;
    this.isTeamRecordLoading$ = this.teamsSummaryFacade.teamRecordLoading$;
    this.teamRecord$ = this.teamsSummaryFacade.teamRecord$;
    this.totalSalary$ = this.teamsSummaryFacade.totalTeamSalary$;
    this.nextTotalSalary$ = this.teamsSummaryFacade.totalNextTeamSalary$;
    this.totalPlayers$ = this.teamsSummaryFacade.totalPlayerCount$;
    this.user$ = this.teamsSummaryFacade.user$;
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });

    this.user$
      .pipe(
        skip(1),
        filter((v) => v !== undefined)
      )
      .subscribe((user: UserDto | undefined) => {
        if (user) {
          this.teamsSummaryFacade.getUserTeam(user.id);
        }
      });
  }

  ngOnInit(): void {
    this.userTeam$
      .pipe(untilDestroyed(this))
      .subscribe((userTeam: TeamDto | undefined) => {
        if (userTeam) {
          this.teamsSummaryFacade.getUserTeamRecord(userTeam.id);
          this.teamsSummaryFacade.getPlayerSalaries(userTeam.shortname);
          this.teamsSummaryFacade.getGoalieSalaries(userTeam.shortname);
        }
      });
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
