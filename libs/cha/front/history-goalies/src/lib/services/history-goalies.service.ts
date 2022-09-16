import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HistoryGoaliesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllTimeGoaliesStatsBySeasonType(seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/goalie-stats/history/season/${seasonType}`)
      .pipe(map((result: any) => result));
  }

  getAllTimeGoaliesStatsBySeasonTypeSummed(seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/goalie-stats/history/all-time/${seasonType}`)
      .pipe(map((result: any) => result));
  }
}
