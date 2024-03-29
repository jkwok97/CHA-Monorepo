import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-history-players-all-sidebar',
  templateUrl: './history-players-all-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPlayersAllSidebarComponent {
  @Input() playerStats!: any;
  @Input() statType!: string;

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return '';
    }
  }
}
