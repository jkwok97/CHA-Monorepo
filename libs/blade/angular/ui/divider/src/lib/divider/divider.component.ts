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
  @Input() type: 'solid' | 'dashed' | 'dotted' | undefined = 'solid';
  @Input() layout: 'horizontal' | 'vertical' | undefined = 'horizontal';
  @Input() align: 'left' | 'center' | 'right' | 'top' | 'bottom' | undefined =
    'center';
}
