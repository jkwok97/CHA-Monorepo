import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-games-current-day',
  templateUrl: './games-current-day.component.html',
  styleUrls: ['./games-current-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentDayComponent {
  @Input() dayGames!: any[];
}
