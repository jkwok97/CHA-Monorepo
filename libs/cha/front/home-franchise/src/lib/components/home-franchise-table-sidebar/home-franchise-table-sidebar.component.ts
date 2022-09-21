import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-home-franchise-table-sidebar',
  templateUrl: './home-franchise-table-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFranchiseTableSidebarComponent {
  @Input() teamStats!: any;

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
