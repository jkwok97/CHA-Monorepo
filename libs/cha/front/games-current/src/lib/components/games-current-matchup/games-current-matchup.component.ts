import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GamesDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-games-current-matchup',
  templateUrl: './games-current-matchup.component.html',
  styleUrls: ['./games-current-matchup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentMatchupComponent {
  @Input() game!: GamesDto;
}
