import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  TeamInfoTransactionDto,
  PlayerInfoTransactionDto,
} from '@cha/shared/entities';

@Component({
  selector: 'cha-front-league-trades-team-card',
  templateUrl: './league-trades-team-card.component.html',
  styleUrls: ['./league-trades-team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTradesTeamCardComponent {
  @Input() teamInfo!: TeamInfoTransactionDto;
  @Input() teamPicks!: string[];
  @Input() teamPlayers!: PlayerInfoTransactionDto[];

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return '';
    }
  }
}
