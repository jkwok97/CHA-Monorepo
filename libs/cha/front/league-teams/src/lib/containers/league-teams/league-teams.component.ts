import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-league-teams',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsComponent {}
