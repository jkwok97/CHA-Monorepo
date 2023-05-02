import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatTeamPlayoffsDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-games-playoffs-final-champion-card',
  templateUrl: './games-playoffs-final-champion-card.component.html',
  styleUrls: ['./games-playoffs-final-champion-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesPlayoffsFinalChampionCardComponent {
  @Input() champion!: StatTeamPlayoffsDto;

  
}
