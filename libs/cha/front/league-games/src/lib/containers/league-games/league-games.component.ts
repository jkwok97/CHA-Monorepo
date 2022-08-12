import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-league-games',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueGamesComponent {}
