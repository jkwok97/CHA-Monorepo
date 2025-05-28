import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blade-layout-feature',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureComponent {}
