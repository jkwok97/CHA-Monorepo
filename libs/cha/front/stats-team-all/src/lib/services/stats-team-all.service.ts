import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StatsTeamAllService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllTeamStats(season: string, seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/team-stats/all/${season}/${seasonType}`)
      .pipe(map((result: any) => result));
  }
}
