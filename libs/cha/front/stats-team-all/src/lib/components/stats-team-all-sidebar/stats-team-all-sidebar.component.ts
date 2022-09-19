import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-stats-team-all-sidebar',
  templateUrl: './stats-team-all-sidebar.component.html',
  styleUrls: ['./stats-team-all-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTeamAllSidebarComponent {
  @Input() teamStats!: any;

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
