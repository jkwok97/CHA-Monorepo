import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AwardPlayerDto, AwardTeamDto } from '@cha/shared/entities';

@Injectable()
export class AwardsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  // getAll(): Observable<AwardDto[]> {
  //   return this._http
  //     .get(`${this.apiUrl}/v2/awards`)
  //     .pipe(map((result: any) => result['result']));
  // }

  getChampions(): Observable<AwardTeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/champions`)
      .pipe(map((result: any) => result));
  }

  getScorers(): Observable<AwardPlayerDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/scorers`)
      .pipe(map((result: any) => result));
  }

  getDefense(): Observable<AwardPlayerDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/defense`)
      .pipe(map((result: any) => result));
  }

  getRookies(): Observable<AwardPlayerDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/rookies`)
      .pipe(map((result: any) => result));
  }

  getGoalies(): Observable<AwardPlayerDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/goalies`)
      .pipe(map((result: any) => result));
  }

  getGm(): Observable<AwardTeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/gm`)
      .pipe(map((result: any) => result));
  }

  getSeason(): Observable<AwardTeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/season`)
      .pipe(map((result: any) => result));
  }
}
