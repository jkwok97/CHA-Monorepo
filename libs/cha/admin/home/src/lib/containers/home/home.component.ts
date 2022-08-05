import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-admin-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
