import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

import { PrimeButtonClass } from '@cha/shared/api';
import { ChaAngLogoEnum } from '@cha/shared/ui/angular/logo';

import { LoginFormComponent } from '..';
import { AuthFacade } from '@cha/shared/auth/angular/auth-angular';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'cha-ang-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {
  PrimeIcons = PrimeIcons;
  PrimeButtonClass = PrimeButtonClass;
  ChaLogo = ChaAngLogoEnum;

  @ViewChild(LoginFormComponent, { static: false })
  public loginFormRef?: LoginFormComponent;

  loggingIn$: Observable<boolean>;

  constructor(private authFacade: AuthFacade, private router: Router) {
    this.loggingIn$ = this.authFacade.loggingIn$;
  }

  onSubmit() {
    const formValue = this.loginFormRef?.form.value;

    this.authFacade.login(formValue.email);

    combineLatest([
      this.authFacade.loggingIn$,
      this.authFacade.loggingInComplete$,
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([loggingIn, logInComplete]: [boolean, boolean]) => {
        if (!loggingIn && logInComplete) {
          this.router.navigate(['']);
        }
        this.loginFormRef?.form.reset();
      });
  }
}
