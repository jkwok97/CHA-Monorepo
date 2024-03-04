import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-players-stats-table-sider',
  templateUrl: './players-stats-table-sider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersStatsTableSiderComponent {
  @Input() playerStats!: any;
  @Input() statType!: string;
}
