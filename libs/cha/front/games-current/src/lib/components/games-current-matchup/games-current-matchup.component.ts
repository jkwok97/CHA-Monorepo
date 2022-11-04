import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { GamesDto } from '@cha/shared/entities';
import { first } from 'rxjs';
import { GamesCurrentFacade } from '../../+state/games-current.facade';

@Component({
  selector: 'cha-front-games-current-matchup',
  templateUrl: './games-current-matchup.component.html',
  styleUrls: ['./games-current-matchup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentMatchupComponent {
  @Input() game!: GamesDto;

  display = false;
  isMobile = false;

  constructor(
    private gamesCurrentFacade: GamesCurrentFacade,
    private displayFacade: DisplayFacade
  ) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  onClick(game: GamesDto) {
    this.gamesCurrentFacade.getBoxScore(game.id);
    this.display = true;
  }

  onClose() {
    this.gamesCurrentFacade.resetBoxScore();
    this.display = false;
  }
}
