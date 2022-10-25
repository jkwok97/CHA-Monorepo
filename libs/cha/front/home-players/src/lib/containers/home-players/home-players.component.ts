import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { HomePlayersFacade } from '../../+state/home-players.facade';

@Component({
  selector: 'cha-front-home-players',
  templateUrl: './home-players.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePlayersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatPlayersHistoryDto[]>;

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
    private homePlayersFacade: HomePlayersFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.homePlayersFacade.isLoaded$;
    this.isLoading$ = this.homePlayersFacade.isLoading$;

    this.allStats$ = this.homePlayersFacade.playersStats$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.homePlayersFacade.getUserPlayerStatsBySeason('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.seasonOption = option;
    if (this.statType === 'all') {
      this.homePlayersFacade.getUserPlayerAllTimeStatsBySeason(option);
    } else {
      this.homePlayersFacade.getUserPlayerStatsBySeason(option);
    }
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'season':
        this.statType = option;
        this.homePlayersFacade.getUserPlayerStatsBySeason(this.seasonOption);
        break;
      case 'all':
        this.statType = option;
        this.homePlayersFacade.getUserPlayerAllTimeStatsBySeason(
          this.seasonOption
        );
        break;
      default:
        return;
    }
  }
}
