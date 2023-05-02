import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatTeamPlayoffsDto } from '@cha/shared/entities';
import { first } from 'rxjs';
import { DisplayFacade } from '@cha/domain/core';
import { GamesPlayoffsFacade } from '../../+state/games-playoffs.facade';

@Component({
  selector: 'cha-front-games-playoffs-matchup-final-card',
  templateUrl: './games-playoffs-matchup-final-card.component.html',
  styleUrls: ['./games-playoffs-matchup-final-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesPlayoffsMatchupFinalCardComponent {
  @Input() homeTeam!: StatTeamPlayoffsDto;
  @Input() visTeam!: StatTeamPlayoffsDto;
  @Input() winningTeam!: StatTeamPlayoffsDto;
  @Input() losingTeam!: StatTeamPlayoffsDto;
  @Input() seriesDone!: boolean;
  @Input() seriesScore!: string;
  @Input() seriesTied!: boolean;
  @Input() gameFile!: string;

  display = false;
  isMobile = false;

  constructor(
    private gamesPlayoffsFacade: GamesPlayoffsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  onClick() {
    this.gamesPlayoffsFacade.getBoxScore(this.gameFile);
    this.display = true;
  }

  onClose() {
    this.gamesPlayoffsFacade.resetBoxScore();
    this.display = false;
  }
}
