import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { first } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-league-salaries-ratings-table',
  templateUrl: './league-salaries-ratings-table.component.html',
  styleUrls: ['./league-salaries-ratings-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsTableComponent implements OnInit {
  @Input() salaries!: SalariesAndRatingsDto[];
  @Input() type!: string;

  @ViewChild('dt') dt: Table | undefined;

  isMobile = false;
  first = 0;
  rows = 50;
  totalRecords = 0;
  salariesForTable!: any;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.salariesForTable = this.mapItems(this.salaries);
  }

  mapItems(salaries: SalariesAndRatingsDto[]) {
    return salaries.map((salary: SalariesAndRatingsDto) => ({
      ...salary,
      teamLogo: this.getString(salary.teamInfo.teamlogo),
      teamName: `${salary.teamInfo.city} ${salary.teamInfo.nickname}`,
      playerName: `${salary.player_id.firstname} ${salary.player_id.lastname}`,
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }
}
