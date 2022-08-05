import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blade-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
