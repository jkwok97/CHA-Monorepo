import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-admin-home',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
