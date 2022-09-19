import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SalaryDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-league-salaries-ratings-mobile-salary',
  templateUrl: './league-salaries-ratings-mobile-salary.component.html',
  styleUrls: ['./league-salaries-ratings-mobile-salary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesRatingsMobileSalaryComponent {
  @Input() salaries!: SalaryDto;
}
