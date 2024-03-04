import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SalariesAndRatingsDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-league-salaries-ratings-sidebar',
  templateUrl: './league-salaries-ratings-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsSidebarComponent {
  @Input() data!: SalariesAndRatingsDto;

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
    } else {
      return '';
    }
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }
}
