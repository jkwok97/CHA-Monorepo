import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

import { UserDto } from '@cha/shared/entities';
import { APP_CONFIG, AppConfigModel } from '@cha/domain/app-config';

import { AuthFacade } from '../+state/auth.facade';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private authFacade: AuthFacade,
    private http: HttpClient,
    private router: Router,
    @Optional() @Inject(APP_CONFIG) private appConfig: AppConfigModel
  ) {}

  init() {
    const foundUser = localStorage.getItem('currentUser');

    if (foundUser) {
      this.loginSuccess(JSON.parse(foundUser));
    } else {
      this.router.navigate(['/login']);
    }
  }

  login(email: string) {
    return this.http
      .get<UserDto>(`${this.appConfig.apiUrl}/users/${email}`)
      .pipe(map((user: UserDto) => user));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.authFacade.logout();
  }

  onError() {
    this.authFacade.loginFailed();
  }

  loginSuccess(user: UserDto) {
    this.router.navigate(['']);
    this.authFacade.loginSuccess(user);
  }
}
