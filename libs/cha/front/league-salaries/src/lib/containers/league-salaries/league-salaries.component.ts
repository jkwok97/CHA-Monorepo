import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-league-salaries',
  templateUrl: './league-salaries.component.html',
  styleUrls: ['./league-salaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueSalariesComponent {}
