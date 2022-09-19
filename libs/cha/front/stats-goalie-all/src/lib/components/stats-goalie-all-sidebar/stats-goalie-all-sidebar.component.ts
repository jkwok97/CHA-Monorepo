import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-front-stats-goalie-all-sidebar',
  templateUrl: './stats-goalie-all-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsGoalieAllSidebarComponent {
  @Input() goalieStats!: any;

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }
}
