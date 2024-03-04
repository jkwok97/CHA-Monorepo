import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-goalie-stats-table-sider',
  templateUrl: './goalie-stats-table-sider.component.html',
  styleUrls: ['./goalie-stats-table-sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalieStatsTableSiderComponent {
  @Input() goalieStats!: any;
  @Input() statType!: string;
}
