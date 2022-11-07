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

  getChampions(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/champions`)
      .pipe(map((result: any) => result));
  }

  getScorers(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/scorers`)
      .pipe(map((result: any) => result));
  }

  getDefense(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/defense`)
      .pipe(map((result: any) => result));
  }

  getRookies(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/rookies`)
      .pipe(map((result: any) => result));
  }

  getGoalies(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/goalies`)
      .pipe(map((result: any) => result));
  }

  getGm(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/gm`)
      .pipe(map((result: any) => result));
  }

  getSeason(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards/season`)
      .pipe(map((result: any) => result));
  }
}
