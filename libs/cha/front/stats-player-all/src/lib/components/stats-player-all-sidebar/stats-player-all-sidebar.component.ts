import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-stats-player-all-sidebar',
  templateUrl: './stats-player-all-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPlayerAllSidebarComponent {
  @Input() playerStats!: any;

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return '';
    }
  }
}
