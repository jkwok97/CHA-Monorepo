import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-depth-chart-position',
  templateUrl: './depth-chart-position.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartPositionComponent {
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
