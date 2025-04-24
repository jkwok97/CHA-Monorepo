import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-history-goalie-sidebar',
  templateUrl: './history-goalie-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryGoalieSidebarComponent {
  @Input() goalieStats!: any;
  @Input() statType!: string;

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return '';
    }
  }
}
