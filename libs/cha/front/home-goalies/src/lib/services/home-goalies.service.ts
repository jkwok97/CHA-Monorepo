import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeGoaliesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getUserGoaliesStatsBySeasonType(
    userId: number | undefined,
    seasonType: string
  ) {
    if (userId) {
      return this._http
        .get(`${this.apiUrl}/goalie-stats/user/${userId}/history/${seasonType}`)
        .pipe(map((result: any) => result));
    } else {
      return of([]);
    }
  }

  getUserGoaliesAllTimeStatsBySeasonType(
    userId: number | undefined,
    seasonType: string
  ) {
    if (userId) {
      return this._http
        .get(
          `${this.apiUrl}/goalie-stats/user/${userId}/history/all/${seasonType}`
        )
        .pipe(map((result: any) => result));
    } else {
      return of([]);
    }
  }
}
