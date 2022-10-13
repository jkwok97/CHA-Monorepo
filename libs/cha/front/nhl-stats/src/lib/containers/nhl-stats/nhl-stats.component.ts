import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';

@Component({
  selector: 'cha-front-nhl-stats',
  templateUrl: './nhl-stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  selectOptions = [
    { label: 'Skaters', value: 'skater' },
    { label: 'Goalies', value: 'goalie' },
    { label: 'Rookies', value: 'rookie' },
  ];

  showSkaters = true;
  showGoalies = false;
  showRookies = false;

  constructor(private nhlStatsFacade: NhlStatsFacade) {
    this.isLoaded$ = this.nhlStatsFacade.isAllStatsLoaded$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
    this.nhlStatsFacade.getSportsnetStats('2022', 'reg');
    this.nhlStatsFacade.getRookieStats('skater', 'points', 'DESC', 0, 100);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'skater':
        this.setSkaters();
        break;
      case 'goalie':
        this.setGoalies();
        break;
      case 'rookie':
        this.setRookies();
        break;
      default:
        return;
    }
  }

  setSkaters() {
    this.showSkaters = true;
    this.showGoalies = false;
    this.showRookies = false;
  }

  setGoalies() {
    this.showSkaters = false;
    this.showRookies = false;
    this.showGoalies = true;
  }

  setRookies() {
    this.showRookies = true;
    this.showGoalies = false;
    this.showSkaters = false;
  }
}
