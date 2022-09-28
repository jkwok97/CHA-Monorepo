import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blade-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blade-list.component.html',
  styleUrls: ['./blade-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BladeListComponent {
  @Input() headers!: any[];
  @Input() data!: any[];
  @Input() backgroundColor!: string | null;
  @Input() title!: string;
}
