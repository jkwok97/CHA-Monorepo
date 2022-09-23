import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-teams-stats-table-sider',
  templateUrl: './teams-stats-table-sider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsStatsTableSiderComponent {
  @Input() teamStats!: any;

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
