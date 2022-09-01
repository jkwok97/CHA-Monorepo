import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatTeamPlayoffsDto } from '@cha/shared/entities';

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
}
