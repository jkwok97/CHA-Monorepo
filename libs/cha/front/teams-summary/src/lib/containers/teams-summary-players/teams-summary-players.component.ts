import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatPlayersHistoryDto, UserDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, first, filter, skip } from 'rxjs';
import { PlayerStatsFacade } from '../../+state/player-stats/player-stats.facade';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-teams-summary-players',
  templateUrl: './teams-summary-players.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummaryPlayersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatPlayersHistoryDto[]>;
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
    height: '88vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };

  constructor(
    private playerStatsFacade: PlayerStatsFacade,
    private teamsSummaryFacade: TeamsSummaryFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.playerStatsFacade.isLoaded$;
    this.isLoading$ = this.playerStatsFacade.isLoading$;
    this.user$ = this.teamsSummaryFacade.user$;
    this.allStats$ = this.playerStatsFacade.playersStats$;

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
          this.playerStatsFacade.getUserPlayerStatsBySeason('Regular');
        }
      });
  }

  onSeasonOptionChanged(option: string) {
    this.seasonOption = option;
    if (this.statType === 'all') {
      this.playerStatsFacade.getUserPlayerAllTimeStatsBySeason(option);
    } else {
      this.playerStatsFacade.getUserPlayerStatsBySeason(option);
    }
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'season':
        this.statType = option;
        this.playerStatsFacade.getUserPlayerStatsBySeason(this.seasonOption);
        break;
      case 'all':
        this.statType = option;
        this.playerStatsFacade.getUserPlayerAllTimeStatsBySeason(
          this.seasonOption
        );
        break;
      default:
        return;
    }
  }
}
