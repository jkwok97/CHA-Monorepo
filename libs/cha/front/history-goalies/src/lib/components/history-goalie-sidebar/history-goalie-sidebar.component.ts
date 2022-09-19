import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-history-goalie-sidebar',
  templateUrl: './history-goalie-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryGoalieSidebarComponent {
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
