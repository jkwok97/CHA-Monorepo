import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-draft-current',
  templateUrl: './draft-current.component.html',
  styleUrls: ['./draft-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftCurrentComponent {}
