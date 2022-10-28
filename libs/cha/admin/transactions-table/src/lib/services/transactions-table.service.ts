import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetTradeDto } from '@cha/shared/entities';

@Injectable({
  providedIn: 'root',
})
export class TransactionsTableService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTrades(): Observable<GetTradeDto[]> {
    return this._http
      .get(`${this.apiUrl}/transactions`)
      .pipe(map((result: any) => result));
  }
}
