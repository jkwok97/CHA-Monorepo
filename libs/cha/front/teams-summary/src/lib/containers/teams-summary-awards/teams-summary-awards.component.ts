import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { UserAwardDto, UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, first, skip, filter } from 'rxjs';
import { AwardsFacade } from '../../+state/awards/awards.facade';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-teams-summary-awards',
  templateUrl: './teams-summary-awards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryAwardsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  awards$: Observable<UserAwardDto[]>;
  user$: Observable<UserDto | undefined>;

  isMobile = false;
  panelStyleMobile = {
    width: '100%',
    height: '85vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };

  constructor(
    private displayFacade: DisplayFacade,
    private teamsSummaryFacade: TeamsSummaryFacade,
    private awardsFacade: AwardsFacade
  ) {
    this.isLoaded$ = this.awardsFacade.isLoaded$;
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.awards$ = this.awardsFacade.awards$;
    this.user$ = this.teamsSummaryFacade.user$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.user$
      .pipe(
        skip(1),
        filter((v) => v !== undefined),
        untilDestroyed(this)
      )
      .subscribe((user: UserDto | undefined) => {
        if (user) {
          this.awardsFacade.getUserAwards();
        }
      });
  }
}
