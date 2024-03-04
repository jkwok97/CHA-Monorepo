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
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return '';
    }
  }
}
