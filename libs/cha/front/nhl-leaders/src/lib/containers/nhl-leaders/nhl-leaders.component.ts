import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-nhl-leaders',
  templateUrl: './nhl-leaders.component.html',
  styleUrls: ['./nhl-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlLeadersComponent {}
