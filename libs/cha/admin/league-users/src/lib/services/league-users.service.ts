import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeagueUsersService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getUsers() {
    return this._http
      .get(`${this.apiUrl}/users`)
      .pipe(map((result: any) => result));
  }
}
