import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatTeamPlayoffsDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-games-playoffs-team-avatar',
  templateUrl: './games-playoffs-team-avatar.component.html',
  styleUrls: ['./games-playoffs-team-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesPlayoffsTeamAvatarComponent {
  @Input() team!: StatTeamPlayoffsDto;

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
