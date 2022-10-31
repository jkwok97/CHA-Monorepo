import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DraftTableDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DraftMgmtTableService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getDraftTable(season: number): Observable<DraftTableDto[]> {
    return this._http
      .get(`${this.apiUrl}/draft-table/${season}`)
      .pipe(map((result: any) => result));
  }

  edit(draftTableItem: DraftTableDto): Observable<DraftTableDto> {
    return this._http
      .put(`${this.apiUrl}/draft-table/${draftTableItem.id}`, draftTableItem)
      .pipe(map((result: any) => result));
  }
}
