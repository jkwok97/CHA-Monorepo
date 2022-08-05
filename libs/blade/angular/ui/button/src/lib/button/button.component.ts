import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeButtonClass } from '@cha/shared/entities';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'blade-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type = 'button';
  @Input() hasIcon = false;
  @Input() iconType = '';
  @Input() iconPosition: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() buttonClass = PrimeButtonClass.PRIMARY;
  @Input() disabled: boolean | undefined = false;
  @Input() isLoading = false;
}
