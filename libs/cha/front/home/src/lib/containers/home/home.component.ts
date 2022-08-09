import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-home',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
