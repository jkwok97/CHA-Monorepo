import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  TeamDto,
  TeamRecordDto,
  TeamVersusRecordDto,
} from '@cha/shared/entities';

@Component({
  selector: 'cha-front-games-current-team-card',
  templateUrl: './games-current-team-card.component.html',
  styleUrls: ['./games-current-team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentTeamCardComponent {
  @Input() teamInfo!: TeamDto;
  @Input() teamLastFive!: string[];
  @Input() teamRecord!: TeamRecordDto;
  @Input() teamVersus!: TeamVersusRecordDto;

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getColor(color: string) {
    return `${color}95`;
  }
}
