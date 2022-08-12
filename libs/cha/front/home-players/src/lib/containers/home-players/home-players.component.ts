import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePlayersComponent {}
