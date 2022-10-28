import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  CreateDraftPickDto,
  DraftPickDto,
  PlayerDto,
} from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DraftMgmtEntryService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getPicks(): Observable<DraftPickDto[]> {
    return this._http
      .get(`${this.apiUrl}/entry-draft/ordered`)
      .pipe(map((result: any) => result));
  }

  addPick(pick: CreateDraftPickDto): Observable<DraftPickDto> {
    const body = pick;
    return this._http
      .post(`${this.apiUrl}/entry-draft/add`, body)
      .pipe(map((result: any) => result));
  }

  editPick(pick: DraftPickDto): Observable<DraftPickDto> {
    return this._http
      .put(`${this.apiUrl}/entry-draft/${pick.id}`, pick)
      .pipe(map((result: any) => result));
  }

  deletePick(pickId: number): Observable<DraftPickDto> {
    return this._http
      .delete(`${this.apiUrl}/entry-draft/${pickId}`)
      .pipe(map((result: any) => result));
  }

  getPlayers(): Observable<PlayerDto[]> {
    return this._http
      .get(`${this.apiUrl}/player-info`)
      .pipe(map((result: any) => result));
  }
}
