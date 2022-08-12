import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-draft-summary',
  templateUrl: './draft-summary.component.html',
  styleUrls: ['./draft-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftSummaryComponent {}
