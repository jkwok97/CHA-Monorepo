import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'blade-layout-feature-content',
  templateUrl: './layout-feature-content.component.html',
  styleUrls: ['./layout-feature-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureContentComponent {
  @Input() backgroundColor = '#1e1e1e';
}
