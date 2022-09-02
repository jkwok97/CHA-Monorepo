import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { ScheduleAllDto } from '@cha/shared/entities';
import { first } from 'rxjs';

@Component({
  selector: 'cha-front-games-all-table',
  templateUrl: './games-all-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesAllTableComponent implements OnInit {
  @Input() schedule!: ScheduleAllDto[];

  gamesForTable!: any;
  isMobile = false;

  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.gamesForTable = this.mapItems(this.schedule);
  }

  mapItems(games: ScheduleAllDto[]) {
    return games.map((game: ScheduleAllDto) => ({
      ...game,
      homeTeamLogo: this.getString(game.homeTeamInfo.teamlogo),
      visTeamLogo: this.getString(game.visTeamInfo.teamlogo),
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
