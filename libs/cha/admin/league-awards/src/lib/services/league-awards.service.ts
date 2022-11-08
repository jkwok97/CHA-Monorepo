import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AwardCreateDto, AwardDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeagueAwardsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAll(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/awards`)
      .pipe(map((result: any) => result));
  }

  addAward(award: AwardCreateDto): Observable<AwardDto> {
    const body = award;
    return this._http
      .post(`${this.apiUrl}/awards/add`, body)
      .pipe(map((result: any) => result));
  }

  editAward(award: AwardDto): Observable<AwardDto> {
    return this._http
      .put(`${this.apiUrl}/awards/${award.id}`, award)
      .pipe(map((result: any) => result));
  }

  deleteAward(awardId: number): Observable<AwardDto> {
    return this._http
      .delete(`${this.apiUrl}/awards/${awardId}`)
      .pipe(map((result: any) => result));
  }

  getUsers() {
    return this._http
      .get(`${this.apiUrl}/users`)
      .pipe(map((result: any) => result));
  }

  getAwardTypes() {
    return this._http
      .get(`${this.apiUrl}/awards/types`)
      .pipe(map((result: any) => result));
  }
}
