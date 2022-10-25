import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatGoaliesHistoryDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { HomeGoaliesFacade } from '../../+state/home-goalies.facade';

@Component({
  selector: 'cha-front-home-goalies',
  templateUrl: './home-goalies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeGoaliesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatGoaliesHistoryDto[]>;

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
    height: '85vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };

  constructor(
    private homeGoaliesFacade: HomeGoaliesFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.homeGoaliesFacade.isLoaded$;
    this.isLoading$ = this.homeGoaliesFacade.isLoading$;

    this.allStats$ = this.homeGoaliesFacade.goaliesStats$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.homeGoaliesFacade.getUserGoaliestatsBySeason('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.seasonOption = option;
    if (this.statType === 'all') {
      this.homeGoaliesFacade.getUserGoaliesAllTimeStatsBySeason(option);
    } else {
      this.homeGoaliesFacade.getUserGoaliestatsBySeason(option);
    }
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'season':
        this.statType = option;
        this.homeGoaliesFacade.getUserGoaliestatsBySeason(this.seasonOption);
        break;
      case 'all':
        this.statType = option;
        this.homeGoaliesFacade.getUserGoaliesAllTimeStatsBySeason(
          this.seasonOption
        );
        break;
      default:
        return;
    }
  }
}
