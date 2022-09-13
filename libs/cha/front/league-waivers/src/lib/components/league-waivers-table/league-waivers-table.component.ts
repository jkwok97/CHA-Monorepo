import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { WaiversDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-league-waivers-table',
  templateUrl: './league-waivers-table.component.html',
  styleUrls: ['./league-waivers-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueWaiversTableComponent implements OnInit {
  @Input() waivers!: WaiversDto[];

  waiversForTable!: any[];

  ngOnInit(): void {
    this.waiversForTable = this.mapItems(this.waivers);
  }

  mapItems(waivers: WaiversDto[]) {
    return waivers
      .map((waiver: WaiversDto) => ({
        ...waiver,
        teamLogo: this.getString(waiver.teamInfo.teamlogo),
        teamName: `${waiver.teamInfo.city} ${waiver.teamInfo.nickname}`,
      }))
      .sort((a, b) => a.priority_number - b.priority_number);
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
