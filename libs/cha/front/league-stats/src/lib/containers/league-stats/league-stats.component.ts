import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-league-stats',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsComponent {}
