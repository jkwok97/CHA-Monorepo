import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DivisionCreateDto, DivisionDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeagueDivisionsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getDivisions() {
    return this._http
      .get(`${this.apiUrl}/divisions`)
      .pipe(map((result: any) => result));
  }

  getConferences() {
    return this._http
      .get(`${this.apiUrl}/conferences`)
      .pipe(map((result: any) => result));
  }

  addDivisions(division: DivisionCreateDto): Observable<DivisionDto> {
    const body = division;
    return this._http
      .post(`${this.apiUrl}/divisions/add`, body)
      .pipe(map((result: any) => result));
  }

  editDivisions(division: DivisionDto): Observable<DivisionDto> {
    return this._http
      .put(`${this.apiUrl}/divisions/${division.id}`, division)
      .pipe(map((result: any) => result));
  }

  deleteDivisions(divisionId: number): Observable<DivisionDto> {
    return this._http
      .delete(`${this.apiUrl}/divisions/${divisionId}`)
      .pipe(map((result: any) => result));
  }
}
