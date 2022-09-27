import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home-summary-depth-chart-position',
  templateUrl: './home-summary-depth-chart-position.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartPositionComponent {
  @Input() title!: string;
  @Input() players!: SalariesAndRatingsDto[];
  @Input() isOffSeason!: boolean;

  display = false;
  playerStats!: any;

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }

  onPlayerClick(stat: SalariesAndRatingsDto) {
    this.playerStats = stat;
    this.display = true;
  }
}
