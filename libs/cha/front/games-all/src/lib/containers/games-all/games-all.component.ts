import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-games-all',
  templateUrl: './games-all.component.html',
  styleUrls: ['./games-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesAllComponent {}
