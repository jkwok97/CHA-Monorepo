import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { first } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-front-players-stats-table',
  templateUrl: './players-stats-table.component.html',
  styleUrls: ['./players-stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersStatsTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() stats!: StatPlayersHistoryDto[];
  @Input() statType!: string;

  @ViewChild('dt') dt: Table | undefined;
  @ViewChild('filterInput') filterInput!: ElementRef;

  first = 0;
  rows = 30;
  totalRecords = 0;
  sortField = 'points';
  statsForTable!: any;
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

  ngOnInit(): void {
    this.statsForTable = this.mapItems(this.stats);
  }

  ngAfterViewInit(): void {
    this.filterInput.nativeElement.value = '25';

    this.applyFilterGlobal(
      { target: { value: this.filterInput.nativeElement.value } },
      'contains'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['statType'].currentValue === 'all') {
      setTimeout(() => {
        this.filterInput.nativeElement.value = '';

        this.applyFilterGlobal(
          { target: { value: this.filterInput.nativeElement.value } },
          'contains'
        );
      }, 100);
    }
  }

  mapItems(stats: StatPlayersHistoryDto[]) {
    return stats.map((stat: StatPlayersHistoryDto) => ({
      ...stat,
      team_string: `${stat.team_name}`,
      full_name: `${stat.player_id?.firstname} ${stat.player_id?.lastname}`,
      team_name: `${stat.teamInfo?.city} ${stat.teamInfo?.nickname}`,
      teamLogo: stat.teamInfo?.teamlogo
        ? this.getString(stat.teamInfo?.teamlogo)
        : '',
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

  onPlayerClick(stat: StatPlayersHistoryDto) {
    this.playerStats = stat;
    this.display = true;
  }

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return '';
    }
  }
}
