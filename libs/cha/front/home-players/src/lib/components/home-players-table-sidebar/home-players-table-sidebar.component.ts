import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-home-players-table-sidebar',
  templateUrl: './home-players-table-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePlayersTableSidebarComponent {
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
