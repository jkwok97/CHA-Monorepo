import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatGoaliesHistoryDto, UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, first, filter, skip } from 'rxjs';
import { GoalieStatsFacade } from '../../+state/goalie-stats/goalie-stats.facade';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-teams-summary-goalies',
  templateUrl: './teams-summary-goalies.component.html',
  styleUrls: ['./teams-summary-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryGoaliesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatGoaliesHistoryDto[]>;
  user$: Observable<UserDto | undefined>;

  isMobile = false;
  seasonOption = 'Regular';
  statType = 'season';

  selectOptions = [
    { label: 'Per Season', value: 'season' },
    { label: 'All-time', value: 'all' },
  ];

  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs' },
  ];

  panelStyleMobile = {
    width: '100%',
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
  };

  constructor(
    private goalieStatsFacade: GoalieStatsFacade,
    private teamsSummaryFacade: TeamsSummaryFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.goalieStatsFacade.isLoaded$;
    this.isLoading$ = this.goalieStatsFacade.isLoading$;
    this.user$ = this.teamsSummaryFacade.user$;
    this.allStats$ = this.goalieStatsFacade.goaliesStats$;

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
          this.goalieStatsFacade.getUserGoaliestatsBySeason('Regular');
        }
      });
  }

  onSeasonOptionChanged(option: string) {
    this.seasonOption = option;
    if (this.statType === 'all') {
      this.goalieStatsFacade.getUserGoaliesAllTimeStatsBySeason(option);
    } else {
      this.goalieStatsFacade.getUserGoaliestatsBySeason(option);
    }
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'season':
        this.statType = option;
        this.goalieStatsFacade.getUserGoaliestatsBySeason(this.seasonOption);
        break;
      case 'all':
        this.statType = option;
        this.goalieStatsFacade.getUserGoaliesAllTimeStatsBySeason(
          this.seasonOption
        );
        break;
      default:
        return;
    }
  }
}
