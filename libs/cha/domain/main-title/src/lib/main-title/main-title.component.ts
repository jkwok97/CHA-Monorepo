import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cha-main-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTitleComponent {}
