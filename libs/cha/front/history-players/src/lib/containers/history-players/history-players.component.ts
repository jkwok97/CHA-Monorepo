import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-history-players',
  templateUrl: './history-players.component.html',
  styleUrls: ['./history-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPlayersComponent {}
