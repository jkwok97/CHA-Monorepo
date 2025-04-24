import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-league-history',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueHistoryComponent {}
