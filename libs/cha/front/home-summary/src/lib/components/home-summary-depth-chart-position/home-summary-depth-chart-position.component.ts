import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { first } from 'rxjs';

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
  isMobile = false;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  onPlayerClick(stat: SalariesAndRatingsDto) {
    this.playerStats = stat;
    this.display = true;
  }
}
