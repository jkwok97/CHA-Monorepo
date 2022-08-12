import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AwardDto } from '@cha/shared/entities';

@Injectable()
export class AwardsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAll(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards`)
      .pipe(map((result: any) => result['result']));
  }

  getChampions(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards/champions`)
      .pipe(map((result: any) => result['result']));
  }

  getScorers(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards/scorers`)
      .pipe(map((result: any) => result['result']));
  }

  getDefense(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards/defense`)
      .pipe(map((result: any) => result['result']));
  }

  getRookies(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards/rookies`)
      .pipe(map((result: any) => result['result']));
  }

  getGoalies(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards/goalies`)
      .pipe(map((result: any) => result['result']));
  }

  getGm(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards/gm`)
      .pipe(map((result: any) => result['result']));
  }

  getSeason(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards/season`)
      .pipe(map((result: any) => result['result']));
  }
}
