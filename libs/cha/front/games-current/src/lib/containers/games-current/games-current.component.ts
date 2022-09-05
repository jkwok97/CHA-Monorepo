import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { GamesDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, withLatestFrom } from 'rxjs';
import { GamesCurrentFacade } from '../../../+state/games-current.facade';

@UntilDestroy()
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

  groupGames!: GamesDto[][];
  gamesSet: 'curr' | 'prev' | 'next' = 'curr';

  selectSeasonOptions = [
    { label: '<< Previous', value: 'prev' },
    { label: 'Current', value: 'curr', disabled: false },
    { label: 'Next >>', value: 'next', disabled: false },
  ];

  constructor(
    private gamesCurrentFacade: GamesCurrentFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.gamesCurrentFacade.isLoaded$;
    this.isLoading$ = this.gamesCurrentFacade.isLoading$;
    this.games$ = this.gamesCurrentFacade.games$;

    this.games$
      .pipe(
        withLatestFrom(this.leagueDataFacade.leagueData$),
        untilDestroyed(this)
      )
      .subscribe(([games, data]) => {
        if (this.gamesSet === 'curr') {
          this.groupGames = this.filterGames(games, Number(data.current_day));
        } else if (this.gamesSet === 'next') {
          this.groupGames = this.filterGames(
            games,
            Number(data.current_day) + 5
          );
        } else {
          this.groupGames = this.filterGames(
            games,
            Number(data.current_day) - 5
          );
        }
      });
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'prev':
        this.gamesSet = option;
        this.gamesCurrentFacade.getPreviousGames();
        break;
      case 'curr':
        this.gamesSet = option;
        this.gamesCurrentFacade.getGames();
        break;
      case 'next':
        this.gamesSet = option;
        this.gamesCurrentFacade.getNextGames();
        break;
      default:
        break;
    }
  }

  filterGames(games: GamesDto[], day: number) {
    const setOne = games.filter((game: GamesDto) => game.gameDay === day);
    const setTwo = games.filter((game: GamesDto) => game.gameDay === day + 1);
    const setThree = games.filter((game: GamesDto) => game.gameDay === day + 2);
    const setFour = games.filter((game: GamesDto) => game.gameDay === day + 3);
    const setFive = games.filter((game: GamesDto) => game.gameDay === day + 4);
    return [setOne, setTwo, setThree, setFour, setFive];
  }
}
