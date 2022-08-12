import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-nhl-stats',
  templateUrl: './nhl-stats.component.html',
  styleUrls: ['./nhl-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsComponent {}
