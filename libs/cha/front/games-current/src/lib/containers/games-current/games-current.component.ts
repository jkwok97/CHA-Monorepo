import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-games-current',
  templateUrl: './games-current.component.html',
  styleUrls: ['./games-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentComponent {}
