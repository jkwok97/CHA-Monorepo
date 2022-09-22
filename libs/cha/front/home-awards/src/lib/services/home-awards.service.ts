import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeAwardsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getUserAwards(userId: number | undefined) {
    if (userId) {
      return this._http
        .get(`${this.apiUrl}awards/user/${userId}`)
        .pipe(map((result: any) => result));
    } else {
      return of([]);
    }
  }
}
