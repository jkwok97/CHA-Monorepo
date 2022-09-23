import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-players-stats-table-sider',
  templateUrl: './players-stats-table-sider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersStatsTableSiderComponent {
  @Input() playerStats!: any;
  @Input() statType!: string;

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }
}
