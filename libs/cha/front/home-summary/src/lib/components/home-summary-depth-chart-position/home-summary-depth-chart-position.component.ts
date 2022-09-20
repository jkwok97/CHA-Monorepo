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
}
