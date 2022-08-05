import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthFacade } from '@cha/shared/auth/angular/auth-angular';

@Component({
  selector: 'cha-ang-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authFacade: AuthFacade) {
    this.authFacade.init();
  }
}
