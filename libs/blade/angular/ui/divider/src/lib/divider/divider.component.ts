import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'blade-divider',
  standalone: true,
  imports: [CommonModule, DividerModule],
  templateUrl: './divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BladeDividerComponent {
  @Input() type = 'solid';
  @Input() layout = 'horizontal';
  @Input() align = 'center';
}
