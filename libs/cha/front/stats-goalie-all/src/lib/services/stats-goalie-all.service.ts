import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StatsGoalieAllService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllGoalieStats(season: string, seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/goalie-stats/all/${season}/${seasonType}`)
      .pipe(map((result: any) => result));
  }
}
