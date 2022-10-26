import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetTeamTransactionDto, WaiverAcquisitionDto } from '@cha/shared/entities';

@Injectable({
  providedIn: 'root',
})
export class TransactionsTradesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTeam(
    team: string,
    season: string,
    draftYear: string
  ): Observable<GetTeamTransactionDto> {
    return this._http
      .get(`${this.apiUrl}/transactions/team/${team}/${season}/${draftYear}`)
      .pipe(map((result: any) => result));
  }

  setWaiverAcquisition(
    team: string,
    players: string[],
    season: string
  ): Observable<any> {
    const body: WaiverAcquisitionDto = {
      team,
      players,
      season,
    };

    console.log(body);
    return this._http
      .put(`${this.apiUrl}/transactions/waivers/acquire`, body)
      .pipe(map((result: any) => result));
  }

  setWaiverRelease(
    team: string,
    players: string[],
    season: string
  ): Observable<any> {
    const body = {
      team,
      players,
      season,
    };
    console.log(body);
    return this._http
      .put(`${this.apiUrl}/transactions/waivers/release`, body)
      .pipe(map((result: any) => result));
  }

  setTrade(
    teamOne: string,
    teamTwo: string,
    teamOnePicks: string[],
    teamTwoPicks: string[],
    season: string
  ): Observable<any> {
    const body = {
      teamOne,
      teamTwo,
      teamOnePicks,
      teamTwoPicks,
      season,
    };
    console.log(body);
    return this._http
      .put(`${this.apiUrl}/transactions/trade`, body)
      .pipe(map((result: any) => result));
  }
}
