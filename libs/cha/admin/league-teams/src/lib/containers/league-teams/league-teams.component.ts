import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-admin-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsComponent {}