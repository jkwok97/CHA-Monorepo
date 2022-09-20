import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home-summary-depth-chart-position',
  templateUrl: './home-summary-depth-chart-position.component.html',
  styleUrls: ['./home-summary-depth-chart-position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartPositionComponent {
  @Input() title!: string;
  @Input() players!: SalariesAndRatingsDto[];

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }
}
