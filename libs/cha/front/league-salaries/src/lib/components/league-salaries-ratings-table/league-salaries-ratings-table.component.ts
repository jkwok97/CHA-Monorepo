import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-league-salaries-ratings-table',
  templateUrl: './league-salaries-ratings-table.component.html',
  styleUrls: ['./league-salaries-ratings-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsTableComponent {
  @Input() salaries!: SalariesAndRatingsDto[];
  @Input() type!: string;

  isMobile = false;
  first = 0;
  rows = 50;
  totalRecords = 0;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
