import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DraftPickDto, DraftTableDto } from '@cha/shared/entities';

@Injectable()
export class DraftService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getDraftTable(
    draftYear: number,
    playingYear: string
  ): Observable<DraftTableDto[]> {
    return this._http
      .get(`${this.apiUrl}/draft-table/${draftYear}/${playingYear}`)
      .pipe(map((result: any) => result));
  }

  getDraftPicks(): Observable<DraftPickDto[]> {
    return this._http
      .get(`${this.apiUrl}/entry-draft/ordered`)
      .pipe(map((result: any) => result));
  }
}
