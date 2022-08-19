import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DraftTableDto } from '@cha/shared/entities';

@Injectable()
export class DraftTableService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getDraftTable(
    draftYear: number,
    playingYear: string
  ): Observable<DraftTableDto[]> {
    console.log(draftYear, playingYear);

    return this._http
      .get(`${this.apiUrl}/draft-table/${draftYear}/${playingYear}`)
      .pipe(map((result: any) => result));
  }

  //   getDraftPicks(): Observable<DraftPickDto[]> {
  //     return this._http
  //       .get(`${this.apiUrl}/v2/draft/ordered`)
  //       .pipe(map((result: any) => result['result']));
  //   }
}
