import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeagueTradesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTransactions(season: string) {
    return this._http
      .get(`${this.apiUrl}/transactions/${season}`)
      .pipe(map((result: any) => result));
  }
}
