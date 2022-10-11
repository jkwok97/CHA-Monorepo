import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeagueSalariesAndRatingsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getPlayerSalaries(season: string, ratingSeason: string) {
    return this._http
      .get(`${this.apiUrl}/salaries/all/players/${season}/${ratingSeason}`)
      .pipe(map((result: any) => result));
  }

  getGoaliesSalaries(season: string, ratingSeason: string) {
    return this._http
      .get(`${this.apiUrl}/salaries/all/goalies/${season}/${ratingSeason}`)
      .pipe(map((result: any) => result));
  }
}
