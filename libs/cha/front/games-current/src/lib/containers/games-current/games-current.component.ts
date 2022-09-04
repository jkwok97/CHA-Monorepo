import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GamesDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { GamesCurrentFacade } from '../../../+state/games-current.facade';

@Component({
  selector: 'cha-front-games-current',
  templateUrl: './games-current.component.html',
  styleUrls: ['./games-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  games$: Observable<GamesDto[]>;

  selectSeasonOptions = [
    { label: '<< Previous', value: 'prev' },
    { label: 'Current', value: 'curr', disabled: false },
    { label: 'Next >>', value: 'next', disabled: false },
  ];

  constructor(private gamesCurrentFacade: GamesCurrentFacade) {
    this.isLoaded$ = this.gamesCurrentFacade.isLoaded$;
    this.isLoading$ = this.gamesCurrentFacade.isLoading$;
    this.games$ = this.gamesCurrentFacade.games$;

    this.games$.subscribe(console.log);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'prev':
        this.gamesCurrentFacade.getPreviousGames();
        break;
      case 'curr':
        this.gamesCurrentFacade.getGames();
        break;
      case 'next':
        this.gamesCurrentFacade.getNextGames();
        break;
      default:
        break;
    }
  }
}
