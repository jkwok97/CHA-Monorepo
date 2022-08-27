import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StatsPlayersLeadersService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllPlayerLeaders(season: string, seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/players-stats/leaders/${season}/${seasonType}`)
      .pipe(map((result: any) => result['result']));
  }
}
