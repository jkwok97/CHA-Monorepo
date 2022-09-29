import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserCreateDto, UserDto } from '@cha/shared/entities';
import { Observable, of } from 'rxjs';

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

  addUser(user: UserCreateDto): Observable<UserDto> {
    const body = user;
    return this._http
      .post(`${this.apiUrl}/users/add`, body)
      .pipe(map((result: any) => result));
  }

  editUser(user: UserCreateDto, userId: number): Observable<UserDto> {
    return this._http
      .put(`${this.apiUrl}/users/userId/${userId}`, user)
      .pipe(map((result: any) => result));
  }

  deleteUser(userId: number): Observable<UserDto> {
    return this._http
      .delete(`${this.apiUrl}/users/delete/${userId}`)
      .pipe(map((result: any) => result));
  }
}
