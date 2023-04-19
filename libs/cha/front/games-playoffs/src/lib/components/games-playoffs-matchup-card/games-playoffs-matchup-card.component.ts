import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { first } from 'rxjs';
import { DisplayFacade } from '@cha/domain/core';
import { StatTeamPlayoffsDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-games-playoffs-matchup-card',
  templateUrl: './games-playoffs-matchup-card.component.html',
  styleUrls: ['./games-playoffs-matchup-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesPlayoffsMatchupCardComponent {
  @Input() homeTeam!: StatTeamPlayoffsDto;
  @Input() visTeam!: StatTeamPlayoffsDto;
  @Input() winningTeam!: StatTeamPlayoffsDto;
  @Input() losingTeam!: StatTeamPlayoffsDto;
  @Input() seriesDone!: boolean;
  @Input() seriesScore!: string;
  @Input() seriesTied!: boolean;
  @Input() isWest!: boolean;
  @Input() isEast!: boolean;

  display = false;
  isMobile = false;

  constructor(
    // private gamesCurrentFacade: GamesCurrentFacade,
    private displayFacade: DisplayFacade
  ) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  onClick() {
    // this.gamesCurrentFacade.getBoxScore(game.id);
    this.display = true;
    console.log('clicked');
  }

  onClose() {
    // this.gamesCurrentFacade.resetBoxScore();
    this.display = false;
  }
}
