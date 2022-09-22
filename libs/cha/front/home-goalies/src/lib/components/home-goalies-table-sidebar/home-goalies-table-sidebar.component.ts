import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-home-goalies-table-sidebar',
  templateUrl: './home-goalies-table-sidebar.component.html',
  styleUrls: ['./home-goalies-table-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeGoaliesTableSidebarComponent {
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
