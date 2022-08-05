import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthFacade } from '@cha/domain/auth';

@Component({
  selector: 'cha-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authFacade: AuthFacade) {
    this.authFacade.init();
  }
}
