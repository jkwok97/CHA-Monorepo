import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

import { ChaLogoEnum, PrimeButtonClass } from '@cha/shared/entities';

import { LoginFormComponent } from '..';
import { AuthFacade } from '@cha/domain/auth';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'cha-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {
  PrimeIcons = PrimeIcons;
  PrimeButtonClass = PrimeButtonClass;
  ChaLogo = ChaLogoEnum;

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
