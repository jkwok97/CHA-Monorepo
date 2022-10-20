import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetTeamTransactionDto } from '@cha/shared/entities';

@Injectable({
  providedIn: 'root',
})
export class TransactionsTradesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTeam(teamId: number, season: string): Observable<GetTeamTransactionDto> {
    return this._http
      .get(`${this.apiUrl}/transactions/team/${teamId}/${season}`)
      .pipe(map((result: any) => result));
  }
}