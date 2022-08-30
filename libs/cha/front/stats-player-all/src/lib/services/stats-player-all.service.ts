import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StatsPlayerAllService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllPlayerStats(season: string, seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/player-stats/all/${season}/${seasonType}`)
      .pipe(map((result: any) => result));
  }
}
