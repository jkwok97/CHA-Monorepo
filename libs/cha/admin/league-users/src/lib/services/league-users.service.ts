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
    console.log(user);
    return of({
      id: 10000,
      firstname: 'test',
      lastname: 'last',
      email: 'testlast@email.com',
      isadmin: true,
      isactive: true,
    } as UserDto);
  }

  editUser(user: UserCreateDto): Observable<UserDto> {
    console.log(user);
    return of({
      id: 10000,
      firstname: 'test',
      lastname: 'last',
      email: 'testlast@email.com',
      isadmin: true,
      isactive: true,
    } as UserDto);
  }
}
