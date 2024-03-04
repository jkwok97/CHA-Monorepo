import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { Avatar } from 'primeng/avatar';
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
  @Input() type!: 'future' | 'current';
  @ViewChild('avatar') avatar!: Avatar;

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

  onImageError(event: any) {
    event.target.src = 'assets/images/skater.jpg';
  }
}
