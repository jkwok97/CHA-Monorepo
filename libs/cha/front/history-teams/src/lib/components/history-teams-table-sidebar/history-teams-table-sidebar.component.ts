import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-history-teams-table-sidebar',
  templateUrl: './history-teams-table-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTeamsTableSidebarComponent {
  @Input() teamStats!: any;

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
