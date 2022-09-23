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

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }
}
